import Logo from "../Header/Logo";
import Nav from "../Header/Nav";

function HeaderLogoNav() {
  console.log("Rendering component: header-logo-nav");

  return (
    <header className="header-logo-nav">
      <div className="section-inner-container flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-0 py-4.5">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default HeaderLogoNav;
