import { useSiteContent } from "../../hooks/useSiteContent";
import NavLink from "./NavLink";

function Nav() {
  const { sections } = useSiteContent();

  // filter if showInNav is true, returns array of sections where true
  const sectionsForNav = sections.filter((section) => section?.meta?.showInNav);

  // map through array of objects
  const linkElements = sectionsForNav.map((section, index) => {
    // section name for link
    const rawLink = section?.meta?.name;

    const displayLink = section?.meta?.navLabel;

    return (
      <NavLink
        href={`#${rawLink}`}
        label={displayLink}
        className="nav__link px-4 py-1.5 hover:bg-brand-blue hover:text-white rounded-full mr-1.5 last:mr-0 hover:no-underline"
        key={displayLink + index}
      />
    );
  });

  return <nav className="header__nav">{linkElements}</nav>;
}

export default Nav;
