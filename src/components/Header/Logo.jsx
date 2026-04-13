function Logo() {
  console.log("Rendering component: logo");

  return (
    <div className="header__logo">
      <a href="#" className="no-underline">
        Canvey
        <br />
        Foot Clinic
      </a>
    </div>
  );
}

export default Logo;
