
import { CommentPreview } from "./CommentPreview";

export function CommentList({ stories }) {
  return (
    <section className="comment-list">
      <ul>
        {stories.map((story) => (
          <li key={story._id}>
            <CommentPreview story={story} />
          </li>
        ))}
      </ul>
    </section>
  );
}