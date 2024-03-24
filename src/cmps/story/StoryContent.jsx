export function StoryContent({ story }) {
  return (
    <section className="story-content">
      <img className="story-content-img" src={story.imgUrl} alt={story.txt} />
    </section>
  );
}
