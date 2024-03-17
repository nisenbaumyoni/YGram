import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_STORY } from "../store/reducers/story.reducer";

export function StoryButtons({ story }) {
  const dispatch = useDispatch();
  const loggedInMiniUser = useSelector(
    (storeState) => storeState.loggedInMiniUser
  );
  let isLikedByLoggedinUser;
  let StoryToSave;
  console.log("loggedInMiniUser", loggedInMiniUser);

  for (let i = 0; i < story.likedBy.length; i++) {
    if (story.likedBy[i]._id === loggedInMiniUser._id) {
      console.log("likedBy", story.likedBy[i]);
      console.log("useEffect/isLikedByLoggedinUser", isLikedByLoggedinUser);

      isLikedByLoggedinUser = true;
      break; // Exit the loop once the value is found
    }
    isLikedByLoggedinUser = false;
  }

  useEffect(() => {
    console.log("useEffect");
    for (let i = 0; i < story.likedBy.length; i++) {
      if (story.likedBy[i]._id === loggedInMiniUser._id) {
        console.log("likedBy", story.likedBy[i]);
        console.log("useEffect/isLikedByLoggedinUser", isLikedByLoggedinUser);

        isLikedByLoggedinUser = true;
        break; // Exit the loop once the value is found
      }
      isLikedByLoggedinUser = false;
    }
  }, [isLikedByLoggedinUser]);

  function onLikeClick() {
    console.log("onLikeClick");
    if (isLikedByLoggedinUser) {
      console.log(
        "isLikedByLoggedinUser is true , after click going to remove likedBy and save story"
      );
      const updatedLikedBy = story.likedBy.filter(
        (likedBy) => likedBy._id !== loggedInMiniUser._id
      );
      StoryToSave = story;
      StoryToSave.likedBy = updatedLikedBy;
    } else {
      console.log(
        "isLikedByLoggedinUser is false , after click going to add likedBy and save story"
      );
      StoryToSave = story.likedBy.push(loggedInMiniUser);
    }

    console.log("StoryToSave", StoryToSave);
    dispatch({ type: UPDATE_STORY, StoryToSave });
    console.log("onLikeClick finish");
  }

  return (
    <section className="story-buttons">
      <div>
        <img
          className="story-button"
          onClick={() => onLikeClick()}
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
