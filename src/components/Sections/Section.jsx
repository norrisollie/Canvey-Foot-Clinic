function Section({ id, title, subtitle, cta, children }) {
  const isHero = id === "hero";

  const createCtaButtons = () => {
    const primaryButtonClasses =
      "bg-brand-blue text-white p-2.5 rounded-md mt-1.5 cursor-pointer transition-all duration-300 ease-in-out hover:bg-brand-blue-hover";
    const secondaryButtonClasses =
      "border-2 border-brand-blue bg-brand-surface text-brand-blue p-2.5 rounded-md mt-1.5 cursor-pointer transition-all duration-300 ease-in-out hover:bg-brand-blue-hover hover:border-brand-blue-hover hover:text-white";

    // check if exists or length is 0
    // return null if either is true
    if (!cta || cta.length === 0) return null;

    // otherwise, map through cta array and return buttons
    return (
      <div className="flex space-x-4">
        {cta.map((ctaText, index) => (
          <button
            key={`cta-${index}`}
            className={
              index === 0 ? primaryButtonClasses : secondaryButtonClasses
            }
          >
            {ctaText}
          </button>
        ))}
      </div>
    );
  };

  return (
    <section
      className={`w-full py-12 aspect-9/16 md:aspect-video max-h-screen flex items-center justify-center ${isHero ? "h-[calc(100vh-160px)]" : ""}`}
      id={id}
    >
      <div className="section-inner-container">
        {
          // HERO: Specific layout for hero section, with title, subtitle and cta.
          isHero ? (
            <>
              <h1 className="text-6xl font-bold leading-none mb-1.5">
                {title}
              </h1>
              <p className="mb-1.5 text-md">{subtitle}</p>
              {createCtaButtons()}
            </>
          ) : (
            // DEFAULT: For other sections, title and content are displayed in a 2 column grid, with title on the left and content on the right. TODO: add option to reverse this layout (title on right, content on left) for variety.
            <div className="w-full grid grid-cols-2">
              <h2 className="text-2xl font-bold mb-1.5">{title}</h2>
              <p>{children}</p>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default Section;
