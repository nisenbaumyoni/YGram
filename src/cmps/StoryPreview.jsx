import { StoryButtons } from "./StoryButtons";
import { StoryContent } from "./StoryContent";
import { StoryHeader } from "./StoryHeader";
import { StoryStats } from "./StoryStats";
import { Comment } from "./Comment";

export function StoryPreview({story}) {
    return (
        <article className="story-preview">
          {/* <h1>StoryPreview</h1> */}
          <StoryHeader story={story}/>
          <StoryContent story={story}/>
          <StoryButtons story={story}/>
          <StoryStats story={story}/>
          <Comment story={story}/>
        </article>

      );
}