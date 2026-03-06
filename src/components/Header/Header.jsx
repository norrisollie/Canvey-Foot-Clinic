import HeaderContactBar from "../Header/HeaderContactBar";
import HeaderLogoNav from "../Header/HeaderLogoNav";

function Header({ toggleMobileNav }) {
  return (
    <>
      <HeaderContactBar />
      <HeaderLogoNav toggleMobileNav={toggleMobileNav} />
    </>
  );
}

export default Header;
