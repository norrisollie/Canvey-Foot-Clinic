function Logo() {
  return (
    // Logo component with clinic name.
    // default text size is 2xl, increasing to 4xl on medium screens and above.
    <div className="header__logo-image font-bold text-2xl md:text-4xl leading-none">
      Canvey
      <br />
      Foot Clinic
    </div>
  );
}

export default Logo;
