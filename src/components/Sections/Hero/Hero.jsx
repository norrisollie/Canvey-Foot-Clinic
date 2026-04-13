import { useSiteContent } from "../../../hooks/useSiteContent";
import Section from "../Section/Section";

function Hero() {
  const { getSectionByName } = useSiteContent();
  const meta = getSectionByName("hero")?.meta ?? {};
  const content = getSectionByName("hero")?.content ?? {};

  const { name = "hero", element = "section", id = "hero" } = meta;
  const { title = "", subtitle = "", ctas = [] } = content;

  console.log(`Rendering component: ${name}`);

  return (
    <Section wrapperElement={element} id={id} className="section--hero">
      <h1 className="text-6xl whitespace-pre-line font-bold leading-none mb-3">
        {title}
      </h1>
      <p className="mb-4">{subtitle}</p>

      {ctas.length > 0 && (
        <div className="flex gap-4 justify-center">
          {ctas.map((cta, index) => {
            const { label, href } = cta;
            return (
              <button
                key={`cta-${index}`}
                onClick={() => (window.location.href = href)}
                className={
                  index === 0 ? "cta cta--primary" : "cta cta--secondary"
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      )}
    </Section>
  );
}

export default Hero;
