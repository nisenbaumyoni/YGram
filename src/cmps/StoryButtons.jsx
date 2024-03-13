export function StoryButtons() {
  return (
    <section className="story-buttons">
      <div>
        <img
          className="story-button"
          src="/public/story-like-inactive.svg"
          alt=""
        />
        <img
          className="story-button"
          src="/public/story-comment-inactive.svg"
          alt="comment"
        />
        <img
          className="story-button"
          src="/public/story-share-inactive.svg"
          alt="share"
        />
      </div>
      <div>
        <img
          className="story-button story-button-save"
          src="/public/story-save-inactive.svg"
          alt=""
        />
      </div>
    </section>
  );
}
