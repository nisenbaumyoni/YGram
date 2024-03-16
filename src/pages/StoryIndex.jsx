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
import { SuggestedForYou } from "../cmps/SuggestedForYou";
import { About } from "../cmps/About";
import { Loggedin } from "../cmps/rightbar/loggedin";

export function StoryIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const stories = useSelector((storeState) => storeState.stories);
  const filterBy = useSelector((storeState) => storeState.filterBy);
  const dispatch = useDispatch();

  async function loadStoriesFromStore() {
    try {
      const stories = await storyService.query(filterBy);
      dispatch({ type: SET_STORIES, stories });
    } catch (err) {
      console.log("Had issues loading stories", err);
    }
  }

  // const [filterBy, setFilterBy] = useState(storyService.getDefaultFilter);

  useEffect(() => {
    console.log("useEffect");

    setSearchParams(filterBy);
    console.log("before useEffect/loadStoriesFromStore()");
    loadStoriesFromStore();
    // loadStories();
  }, [filterBy]);

  return (
    <section className="story-index">
      <NewStories />
      {!!stories?.length && <StoryList stories={stories} />}
      <Loggedin />
      <SuggestedForYou />
      <About />
      {/* <Outlet /> */}
    </section>
  );
}
