import "./comments.scss";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";

const Comments = ({ idCommentRoom }) => {
  const { userInfo } = useSelector((state) => state.typeMovie);
  const { currentUser } = useSelector((state) => state.typeMovie);

  const [backendComments, setBackendComments] = useState(null);

  const [activeComment, setActiveComment] = useState(null);
  const [rootComments, setRootComments] = useState(null);

  const getReplies = (commentId) =>
    backendComments.comment
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort();

  const addComment = async (text, parentId) => {
    // console.log(name, currentUserId, text, parentId);
    const washingtonRef = doc(db, "commentsRoom", idCommentRoom);
    const newData = [
      ...backendComments.comment,
      {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId: parentId || null,
        userId: currentUser.uid,
        username: userInfo.firstname + " " + userInfo.lastname,
        createdAt: new Date().toISOString(),
        img: userInfo.img,
      },
    ];
    await updateDoc(washingtonRef, {
      comment: newData,
    });
  };

  const updateComment = async (text, commentId) => {
    const updatedBackendComments = backendComments.comment.map(
      (backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      }
    );
    await updateDoc(doc(db, "commentsRoom", idCommentRoom), {
      comment: updatedBackendComments,
    });
    setActiveComment(null);
  };
  const deleteComment = async (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      const updatedBackendComments = backendComments.comment.filter(
        (backendComment) => backendComment.id !== commentId
      );
      await updateDoc(doc(db, "commentsRoom", idCommentRoom), {
        comment: updatedBackendComments,
      });
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "commentsRoom", idCommentRoom), (doc) => {
      if (doc.data()) {
        setBackendComments(doc.data());
        const rootComments = doc
          .data()
          .comment.reverse()
          .filter((backendComment) => backendComment.parentId === null);
        setRootComments(rootComments);
        setActiveComment(null);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="comments">
      {backendComments && (
        <div className="comment-form-title">
          {backendComments.comment.length} Comments
        </div>
      )}
      {userInfo ? (
        <CommentForm
          imgUser={userInfo.img}
          submitLabel="Comment"
          handleSubmit={addComment}
        />
      ) : (
        <CommentForm submitLabel="Comment" />
      )}

      {rootComments && (
        <div className="comments-container">
          {rootComments.map((rootComment) => (
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              updateComment={updateComment}
              name={rootComment.name}
              img={rootComment.img}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
