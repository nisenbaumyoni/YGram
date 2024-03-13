export function StoryStats({ story }) {
  return (
    <section className="story-stats">
      <p>{` ${story.likedBy.length} likes`}</p>
    </section>
  );
}
