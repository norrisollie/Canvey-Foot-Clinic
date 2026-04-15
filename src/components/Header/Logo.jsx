import logoLight from "../../assets/logo-light.png";

function Logo() {
  console.log("Rendering component: logo");

  return (
    <div className="header__logo">
      <a href="#" className="no-underline">
        <img
          src={logoLight}
          alt="Canvey Foot Clinic Logo"
          className="h-14.5 w-auto"
        />
      </a>
    </div>
  );
}

export default Logo;
