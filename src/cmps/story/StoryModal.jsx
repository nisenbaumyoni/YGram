import { CommentList } from "../comment/CommentList";
import { StoryButtons } from "./StoryButtons";
import { StoryStats } from "./StoryStats";
import { UserCmp } from "../UserCmp";

export function StoryModal({ onClose, story }) {
  console.log("StoryModals");
  return (
    <div className="storymodal-overlay" onClick={onClose}>
      <div className="storymodal-layout">
        <img
          className="storymodal-image"
          src={story.imgUrl}
          alt="Instagram Story"
        />
        <div className="storymodal-creator">
          <UserCmp user={story.createdBy} isLoggedIn={false} creator={true} />
        </div>
        <div className="storymodal-comments">
          <CommentList story={story} />
        </div>
        <div className="storymodal-buttons">
          <StoryButtons story={story} />
        </div>
        <div className="storymodal-stats">
          <StoryStats story={story} />
        </div>
        <div className="storymodal-addcomment"></div>
      </div>
    </div>
  );
}
