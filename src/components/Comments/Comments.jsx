import "./comments.scss";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

import {
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "./CommentApi";
import { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Comments = ({ currentUserId, name, idCommentRoom }) => {
  const [backendComments, setBackendComments] = useState(null);
  const [activeComment, setActiveComment] = useState(null);
  // const rootComments =
  //   backendComments &&
  //   backendComments.comment.filter(
  //     (backendComment) => backendComment.parentId === null
  //   );
  // console.log(backendComments)
  // console.log(backendComments.comment, rootComments);
  // console.log(backendComments);
  const getReplies = (commentId) =>
    backendComments.comment
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  // useEffect(() => {
  //   const createCommentRoom = async () => {
  //     try {
  //       await setDoc(doc(db, "commentsRoom", idCommentRoom), {
  //         comment: [],
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   backendComments && createCommentRoom();
  // });
  const addComment = async (name, currentUserId, text, parentId) => {
    console.log(name, currentUserId, text, parentId);
    const washingtonRef = doc(db, "commentsRoom", idCommentRoom);
    const newData = [
      ...backendComments.comment,
      {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId: null,
        userId: currentUserId,
        username: name,
        createdAt: new Date().toISOString(),
      },
    ];
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      comment: newData,
    });
    // createCommentApi(name, currentUserId, text, parentId).then((comment) => {
    //   setBackendComments([comment, ...backendComments]);
    //   setActiveComment(null);
    // });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "commentsRoom", idCommentRoom), (doc) => {
      setBackendComments(doc.data());
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm
        submitLabel="Write"
        handleSubmit={addComment}
        currentUserId={currentUserId}
        name={name}
      />
      {backendComments && (
        <div className="comments-container">
          {backendComments.comment.map((rootComment) => (
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              updateComment={updateComment}
              currentUserId={currentUserId}
              name={name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
