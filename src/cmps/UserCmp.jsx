export function UserCmp({ user, isLoggedIn, creator }) {
  let createdBy
  creator? createdBy=user.createdBy : ""
  return (
    <section className="user-cmp">
      <div className="user-cmp-leftside">
        <div className="user-cmp-photo">
          {/* <img src="/public/account.png" alt="" /> */}
        </div>
        <div className="user-cmp-text">
          {creator && (
            <span className="bold-text">{user.fullname}</span>
          )}
          {!creator && <span className="bold-text">{"username"}</span>}
          {!isLoggedIn && !creator && (
            <span className="small-text">{"Suggested for you"}</span>
          )}
        </div>
      </div>
      <div className="user-cmp-rightside">
        {isLoggedIn && !creator && <p className="user-cmp-action">Switch</p>}
        {!isLoggedIn && !creator && <p className="user-cmp-action">Follow</p>}
      </div>
    </section>
  );
}
