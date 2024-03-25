export function StoryModal ({ onClose, story }) {
    return (
      <div className="story-modal-overlay" onClick={onClose}>
        <div className="story-layout">
          <img className="story-image" src={story.imgUrl} alt="Instagram Story"  />
          <div className="story-comments"></div>
        </div>
      </div>
    );
  }