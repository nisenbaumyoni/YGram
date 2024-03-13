export function Comment({ story }) {
    return (
    <section className="comment">
      <p className="soft-text">{`View all ${story.comments.length} comments`}</p>
    </section>
  );
}
