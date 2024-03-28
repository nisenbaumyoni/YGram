import { CommentPreview } from "./CommentPreview";

export function CommentList({ story }) {
  console.log("story" , story);
  const storyId = story._id
  const comments = story.comments;

  return (
    <section className="comment-list">
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            {/* <h1>wefwefwef</h1> */}
            <CommentPreview storyId={storyId} comment={comment} />
          </li>
        ))}
      </ul>
    </section>
  );
}
