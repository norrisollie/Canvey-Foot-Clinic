const links = ["Home", "About", "Services", "Contact"];

function MobileNav({ toggleMobileNav }) {
  const linkElements = links.map((link) => {
    return (
      <a href="#" key={link}>
        {link}
      </a>
    );
  });

  return (
    <nav className="sm:hidden fixed top-0 left-0 w-screen h-screen bg-white">
      <div className="w-full h-full flex flex-col ">
        <div className="p-6 flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleMobileNav}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col w-full bottom-0 p-12 pt-6 grow justify-between">
          {linkElements}
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
