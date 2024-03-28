import { useState } from "react";
import { UserCmp } from "../UserCmp";

export function Loggedin() {
  const [isLoggedIn, SetIsLoggedIn] = useState(true);
  const user = "nopic";
  return (
    <section className="loggedin">
      <UserCmp user={user} isLoggedIn={isLoggedIn} creator={false}/>
    </section>
  );
}