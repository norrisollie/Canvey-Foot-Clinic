import Logo from "../Header/Logo";
import Nav from "../Header/Nav";

function HeaderLogoNav() {
  console.log("Rendering component: header-logo-nav");

  return (
    <header className="header-logo-nav">
      <div className="section-inner-container flex items-center justify-between py-4.5">
        <Logo />
        <Nav />
        <button className="sm:hidden">Menu</button>
      </div>
    </header>
  );
}

export default HeaderLogoNav;
