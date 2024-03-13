export function SideBarItem({ itemName }) {
  let imgFile;
  let text;
  switch (itemName) {
    case "home":
      imgFile = "/public/sidebar-home-active.svg";
      text = "Home";
      break;
    case "search":
      imgFile = "/public/sidebar-search-inactive.svg";
      text = "Search";
      break;
    case "messages":
      imgFile = "/public/Sidebar-messages-inactive.svg";
      text = "Messages";
      break;
    case "notifications":
      imgFile = "/public/Sidebar-notifications-inactive.svg";
      text = "Notifications";
      break;
    case "create":
      imgFile = "/public/sidebar-create-inactive.svg";
      text = "Create";
      break;
    case "profile":
      imgFile = "/public/sidebar-search-inactive.svg";
      text = "Profile";
      break;
    default:
      console.log(`Sorry, we are out of ${itemName}.`);
  }
  return (
    <section className="sidebar-item">
      {text!=="Profile" &&<img src={`${imgFile}`} />}
      {text==="Profile" &&<img className="sidebar-profile-photo" src="/public/account.png" alt="Avatar"/>}
      <span className="sidebar-text">{`${text}`}</span>
    </section>
  );
}
