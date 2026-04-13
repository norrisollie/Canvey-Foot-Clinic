import ContactBar from "./ContactBar";
import HeaderLogoNav from "../Header/HeaderLogoNav";

function Header() {
  console.log("Rendering component: header");

  return (
    <>
      <ContactBar />
      <HeaderLogoNav />
    </>
  );
}

export default Header;
