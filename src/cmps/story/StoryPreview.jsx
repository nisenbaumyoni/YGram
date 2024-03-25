import { StoryButtons } from "./StoryButtons";
import { StoryContent } from "./StoryContent";
import { StoryHeader } from "./StoryHeader";
import { StoryStats } from "./StoryStats";
import { StoryComment } from "./StoryComment";

export function StoryPreview({story}) {
    return (
        <article className="story-preview">
          <StoryHeader story={story}/>
          <StoryContent story={story}/>
          <StoryButtons story={story}/>
          <StoryStats story={story}/>
          <StoryComment story={story}/>
        </article>

      );
}