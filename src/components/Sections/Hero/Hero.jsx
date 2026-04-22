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
      <h1
        className="hero__title text-[min(11vw,var(--text-8xl))] leading-[0.9] tracking-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <p
        className="hero__subtitle text-[min(3vw,var(--text-xl))]"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      ></p>

      {ctas.length > 0 && (
        <div className="hero__cta-wrapper">
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
