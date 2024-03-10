import { ProfileIndex } from "./pages/ProfileIndex";
import { StoryIndex } from "./pages/StoryIndex";

const routes = [
  {
    path: "/",
    component: <StoryIndex />,
    label: "Profile",
  },
  {
    path: "user/:id",
    component: <ProfileIndex />,
    label: "Dashboard",
  },
];

export default routes;
