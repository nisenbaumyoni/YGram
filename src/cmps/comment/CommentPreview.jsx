import { StoryButtons } from "../story/StoryButtons";
import { StoryHeader } from "../story/StoryHeader";
import { StoryStats } from "../story/StoryStats";
import { CommentList } from "./CommentList";

export function CommentPreview({story}) {
    return (
        <article className="comment-preview">
          <StoryHeader story={story}/>
          <CommentList story={story}/>
          <StoryButtons story={story}/>
          <StoryStats story={story}/>
        </article>

      );
}