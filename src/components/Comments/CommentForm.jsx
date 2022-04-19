import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

function CommentForm({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
  replyId,
}) {
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.typeMovie);
  // const { currentUser } = useSelector((state) => state.typeMovie);
  const [text, setText] = useState(initialText);
  const [focusInput, setFocusInput] = useState(false);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text, replyId);
    setText("");
  };
  return (
    <div className="wrap-comment-input">
      {userInfo ? (
        <img className="comment-input-img" src={userInfo.img} alt="" />
      ) : (
        <Avatar className="comment-input-img" alt="Remy Sharp" src="" />
      )}

      <form>
        {userInfo ? (
          <input
            className="comment-form-textarea"
            value={text}
            placeholder="Write a comment..."
            onChange={(e) => setText(e.target.value)}
            onFocus={() => {
              setFocusInput(true);
            }}
            onBlur={() => {
              setFocusInput(false);
            }}
            style={
              focusInput
                ? { borderBottom: "1px solid #fff" }
                : { borderBottom: "1px solid rgba(204, 204, 204, 0.3)" }
            }
          />
        ) : (
          <input
            className="comment-form-textarea"
            placeholder="You need login to comment"
            style={{
              borderBottom: "1px solid rgba(204, 204, 204, 0.3)",
            }}
            onClick={() => {
              navigate("/login");
            }}
          />
        )}

        {userInfo ? (
          <button
            onClick={onSubmit}
            className="comment-form-button"
            disabled={isTextareaDisabled}
          >
            {submitLabel}
          </button>
        ) : (
          <button
            onClick={(event) => {
              event.preventDefault();
              navigate("/login");
            }}
            className="comment-form-button"
            disabled={isTextareaDisabled}
          >
            Comment
          </button>
        )}

        {hasCancelButton && (
          <button
            type="button"
            className="comment-form-cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default CommentForm;
