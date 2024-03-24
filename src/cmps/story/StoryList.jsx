import { NewStories } from "./NewStories";
import { StoryPreview } from "./StoryPreview";

export function StoryList({ stories }) {
  return (
    <section className="story-list">
      <ul>
        {stories.map((story) => (
          <li key={story._id}>
            <StoryPreview story={story} />
          </li>
        ))}
      </ul>
    </section>
  );
}
