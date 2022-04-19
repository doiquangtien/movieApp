import CommentForm from "./CommentForm";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { format } from "timeago.js";
import { useState } from "react";
import { useSelector } from "react-redux";
function Comment({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  img,
}) {
  const { currentUser } = useSelector((state) => state.typeMovie);

  const [moreComment, setMoreComment] = useState(false);
  const [likeAction, setLikeAction] = useState(false);
  const [dislikeAction, setDislikeAction] = useState(false);

  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  // const canDelete =
  //   currentUser.uid === comment.userId && replies.length === 0 && !timePassed;
  // const canReply = Boolean(currentUser.uid);
  // const canEdit = currentUser.uid === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  // const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const revMyArr = [].concat(replies).reverse();
  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <img src={img} alt="" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div className="comment-timeago">{format(comment.createdAt)}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            initialText={comment.body}
            hasCancelButton
            handleSubmit={(text, replyId) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {likeAction ? (
            <ThumbUpIcon
              className="comment-icon-full"
              onClick={() => {
                setLikeAction(false);
              }}
            />
          ) : (
            <ThumbUpOutlinedIcon
              onClick={() => {
                setLikeAction(true);
                setDislikeAction(false);
              }}
              className="comment-icon"
            />
          )}
          {dislikeAction ? (
            <ThumbDownAltIcon
              className="comment-icon-full"
              onClick={() => {
                setDislikeAction(false);
              }}
            />
          ) : (
            <ThumbDownAltOutlinedIcon
              onClick={() => {
                setDislikeAction(true);
                setLikeAction(false);
              }}
              className="comment-icon"
            />
          )}
          {currentUser && (
            <>
              {currentUser.uid && (
                <div
                  className="comment-action"
                  onClick={() =>
                    setActiveComment({ id: comment.id, type: "replying" })
                  }
                >
                  REPLY
                </div>
              )}
              {currentUser.uid === comment.userId && !timePassed && (
                <div
                  className="comment-action"
                  onClick={() =>
                    setActiveComment({ id: comment.id, type: "editing" })
                  }
                >
                  EDIT
                </div>
              )}
              {currentUser.uid === comment.userId &&
                replies.length === 0 &&
                !timePassed && (
                  <div
                    className="comment-action"
                    onClick={() => deleteComment(comment.id)}
                  >
                    DELETE
                  </div>
                )}
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            hasCancelButton
            handleSubmit={addComment}
            img={img}
            replyId={replyId}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {moreComment ? (
              <div
                className="replies-more"
                onClick={() => {
                  setMoreComment(false);
                }}
              >
                <ArrowDropDownOutlinedIcon />
                Hide {revMyArr.length} replies
              </div>
            ) : (
              <div
                className="replies-more"
                onClick={() => {
                  setMoreComment(true);
                }}
              >
                <ArrowDropDownOutlinedIcon />
                See more {revMyArr.length} comments
              </div>
            )}
            {moreComment && (
              <>
                {revMyArr.map((reply) => (
                  <Comment
                    key={reply.id}
                    comment={reply}
                    setActiveComment={setActiveComment}
                    activeComment={activeComment}
                    updateComment={updateComment}
                    deleteComment={deleteComment}
                    addComment={addComment}
                    parentId={comment.id}
                    replies={[]}
                    name={reply.name}
                    img={reply.img}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
