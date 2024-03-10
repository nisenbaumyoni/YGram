//react
import { Outlet, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SET_STORIES } from "../store/reducers/story.reducer";

// Services
import { storyService } from "../services/story.service";
import { loadStories } from "../store/actions/story.actions";

//Components
import { StoryList } from "../cmps/StoryList";
import { NewStories } from "../cmps/NewStories";
import { UserCmp } from "../cmps/UserCmp";
import { SuggestedForYou } from "../cmps/SuggestedForYou";
import { About } from "../cmps/About";

export function StoryIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const stories = useSelector((storeState) => storeState.stories);

  const [filterBy, setFilterBy] = useState(storyService.getDefaultFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchParams(filterBy);
    loadStories();
  }, [filterBy]);

  return (
    <section className="story-index">
      <NewStories />
      {!!stories?.length && <StoryList stories={stories} />}
      <UserCmp/>
      <SuggestedForYou/>
      <About/>
      {/* <Outlet /> */}
    </section>
  );
}
