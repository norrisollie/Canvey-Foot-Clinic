import Logo from "../Header/Logo";
import Nav from "../Header/Nav";

function HeaderLogoNav({ toggleMobileNav }) {
  return (
    <header className="flex flex-col w-full justify-center items-center sticky top-0 z-50 bg-brand-surface/50 backdrop-blur-md">
      <div className="section-inner-container flex items-center justify-between py-4.5">
        <Logo />
        <Nav />
        <button className="sm:hidden" onClick={toggleMobileNav}>
          Menu
        </button>
      </div>
    </header>
  );
}

export default HeaderLogoNav;
