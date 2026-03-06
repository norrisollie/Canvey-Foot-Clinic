const links = ["Home", "About", "Services", "Contact"];

function HeaderLogoNav() {
  const linkElements = links.map((link) => {
    return (
      <a
        href="#"
        className="nav__link px-5 py-2.5 hover:bg-brand-blue hover:text-white rounded-md mr-1.5 last:mr-0"
        key={link}
      >
        {link}
      </a>
    );
  });

  return <nav className="header__nav hidden sm:flex">{linkElements}</nav>;
}

export default HeaderLogoNav;
