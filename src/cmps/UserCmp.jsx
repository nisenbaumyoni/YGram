export function UserCmp({ user, isLoggedIn }) {
  return (
    <section className="user-cmp">
      <div className="user-cmp-leftside">
        <div className="user-cmp-photo">
          {/* <img src="/public/account.png" alt="" /> */}
        </div>
        <div className="user-cmp-text">
          <span className="bold-text">{"username"}</span>
          {!isLoggedIn && 
            <span className="small-text">{"Suggested for you"}</span>
          }
        </div>
      </div>
        <div className="user-cmp-rightside">
          {isLoggedIn && <p className="user-cmp-action">Switch</p>}
          {!isLoggedIn && <p className="user-cmp-action">Follow</p>}
        </div>
    </section>
  );
}