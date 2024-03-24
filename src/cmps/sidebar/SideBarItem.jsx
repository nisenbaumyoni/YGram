export function SideBarItem({ itemName }) {
  let imgFile;
  let text;
  switch (itemName) {
    case "home":
      imgFile = "/sidebar-home-active.svg";
      text = "Home";
      break;
    case "search":
      imgFile = "/public/sidebar-search-inactive.svg";
      text = "Search";
      break;
    case "messages":
      imgFile = "/Sidebar-messages-inactive.svg";
      text = "Messages";
      break;
    case "notifications":
      imgFile = "/Sidebar-notifications-inactive.svg";
      text = "Notifications";
      break;
    case "create":
      imgFile = "/sidebar-create-inactive.svg";
      text = "Create";
      break;
    case "profile":
      text = "Profile";
      break;
    default:
      console.log(`Sorry, we are out of ${itemName}.`);
  }
  return (
    <section className="sidebar-item">
      {text !== "Profile" && <img src={`${imgFile}`} />}
      {text === "Profile" && (
        <img
          className="sidebar-profile-photo"
          src="/public/account.png"
          alt="Avatar"
        />
      )}
      <span className="sidebar-text">{`${text}`}</span>
    </section>
  );
}
