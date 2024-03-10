//route
// scss
// stories.map

import "../src/assets/scss/main.scss";

import { Routes, Route } from "react-router";
import routes from "./routes";
import { StoryIndex } from "./pages/StoryIndex";
import { ProfileIndex } from "./pages/ProfileIndex";
import { SideBar } from "./cmps/SideBar";

export function App() {
  return (
    <main className="main-app">
      {/* <StoryIndex/> */}
      <SideBar />
      <Routes>
        <Route element={<StoryIndex />} path="/">
          {/* <Route element={} path="/:postId"/> */}
        </Route>
        <Route element={<ProfileIndex />} path="/profile" />
      </Routes>
    </main>
  );
}
