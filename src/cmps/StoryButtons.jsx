import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_STORY } from "../store/reducers/story.reducer";
import { saveStory } from "../store/actions/story.actions";

export function StoryButtons({ story }) {
  const loggedInMiniUser = useSelector(
    (storeState) => storeState.loggedInMiniUser
  );
  const [isLikedByLoggedinUser, setIsLikedByLoggedinUser] = useState(
    story.likedBy.find((element) => element._id === loggedInMiniUser._id)
  );
  let StoryToSave = structuredClone(story);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLikedByLoggedinUser(
      story.likedBy.find((element) => element._id === loggedInMiniUser._id)
    );
  }, [story]);

  function onLikeClick() {
    if (isLikedByLoggedinUser) {
      const updatedLikedBy = story.likedBy.filter(
        (likedBy) => likedBy._id !== loggedInMiniUser._id
      );
      StoryToSave.likedBy = updatedLikedBy;
    } else {
      StoryToSave.likedBy.push(loggedInMiniUser);
    }
    saveStory(StoryToSave)
  }

  return (
    <section className="story-buttons">
      <div>
        <img
          className="story-button"
          onClick={() => onLikeClick(isLikedByLoggedinUser)}
          src={
            isLikedByLoggedinUser
              ? "/story-like-active.png"
              : "/story-like-inactive.svg"
          }
          alt=""
        />
        <img
          className="story-button"
          src="/story-comment-inactive.svg"
          alt="comment"
        />
        <img
          className="story-button"
          src="/story-share-inactive.svg"
          alt="share"
        />
      </div>
      <div>
        <img
          className="story-button story-button-save"
          src="/story-save-inactive.svg"
          alt=""
        />
      </div>
    </section>
  );
}
