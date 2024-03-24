import TextareaAutosize from "react-textarea-autosize";
// import 'emoji-mart/css/emoji-mart.css';
import { Picker } from "emoji-mart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { commentService } from "../services/comment.service";

export function Comment({ story }) {
  const [numOfComments, setNumOfComments] = useState(story.comments.length);
  const [comment, setComment] = useState("");
  const [showPostButton, setShowPostButton] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const loggedInMiniUser = useSelector(
    storeState => storeState.loggedInMiniUser
  );

  useEffect(() => {
    setNumOfComments(story.comments.length);
  }, [story]);

  function onEmojiSelect(emoji) {
    setComment(comment + emoji.native);
    setShowEmojiPicker(false);
  }

  function onWritingComment(value) {
    setComment(value);
    value ? setShowPostButton(true) : setShowPostButton(false);
  }

  function onPostClick() {
    //create a new post according to structure
    try {
      const commentToSave = commentService.createComment(
        loggedInMiniUser,
        comment
      );
      console.log(commentToSave);
      //update story
      commentService.saveComment(structuredClone(story),commentToSave);
      //set comment to empty
      setComment("");
      //set showpost to false
      setShowPostButton(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="comment">
      <p className="soft-text">{`View all ${numOfComments} comments`}</p>
      <div className="emoji-text-area">
        <TextareaAutosize
          value={comment}
          onChange={(e) => onWritingComment(e.target.value)}
          placeholder="Add a comment..."
          className="textarea soft-text"
        />

        {showPostButton && (
          <span className="comment-post" onClick={onPostClick}>
            Post
          </span>
        )}

        <button
          className="emoji-button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          😊
          {/* <img className="emoji-button" src="/emoji-button.svg" alt="" /> */}
        </button>

        {showEmojiPicker && (
          <div className="emoji-picker">
            <Picker onSelect={onEmojiSelect} />
          </div>
        )}
      </div>
    </section>
  );
}
