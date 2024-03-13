import { Logo } from "../cmps/Logo";
import { SideBarItem } from "../cmps/SideBarItem";

export function SideBar() {
  return (
    <section className="sidebar">
      <Logo />
      <div className="sidebar-items"></div>
      <SideBarItem itemName={"home"} />
      <SideBarItem itemName={"search"} />
      <SideBarItem itemName={"messages"} />
      <SideBarItem itemName={"notifications"} />
      <SideBarItem itemName={"create"} />
      <SideBarItem itemName={"profile"} />
    </section>
  );
}
