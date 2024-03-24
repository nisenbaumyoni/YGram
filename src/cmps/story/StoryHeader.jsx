import { utilService } from "../../services/util.service";

export function StoryHeader({ story }) {
  const createdBy = story.createdBy;
  return (
    <section className="story-header">

      <p><span className="story-header-name">{createdBy.fullname}</span>
      <span className="story-header-timepassed">{` • ${utilService.getTimePassed(story.createdAt)}`}</span><br></br>
      {/* <span className="story-header-content-info">{`TBD`}</span> */}
      </p>

    </section>
  );
}