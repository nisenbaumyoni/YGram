export function StoryButtons() {

  function onLikeClick(){
    console.log("onLikeClick");

  }
  return (
    <section className="story-buttons">
      <div>
        <img
          className="story-button" onClick={() => onLikeClick()}
          src="/story-like-inactive.svg"
          alt=""
        />
        <img 
          className="story-button"
          src="/story-comment-inactive.svg"
          alt="comment"
        />
        <img
          className="story-button"
          src="/story-share-inactive.svg"
          alt="share"
        />
      </div>
      <div>
        <img
          className="story-button story-button-save"
          src="/story-save-inactive.svg"
          alt=""
        />
      </div>
    </section>
  );
}
