import { content } from "../../../web-data";
import Section from "../Section";

function Hero() {
  const heroSection = content.pages?.home?.sections?.find(
    (section) => section.id === "hero",
  );

  if (!heroSection) return null;

  const { id, payload = {} } = heroSection;
  const { title, subtitle, cta = [] } = payload;

  return (
    <Section
      id={id}
      className="h-[calc(100vh-160px)] flex items-center justify-center"
    >
      <h1 className="text-6xl font-bold leading-none mb-1.5">{title}</h1>

      <p className="mb-4 text-md">{subtitle}</p>

      {cta.length > 0 && (
        <div className="flex gap-4">
          {cta.map((ctaText, index) => (
            <button
              key={`cta-${index}`}
              className={
                index === 0
                  ? "bg-brand-blue text-white p-2.5 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-brand-blue-hover"
                  : "border-2 border-brand-blue bg-brand-surface text-brand-blue p-2.5 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-brand-blue-hover hover:border-brand-blue-hover hover:text-white"
              }
            >
              {ctaText}
            </button>
          ))}
        </div>
      )}
    </Section>
  );
}

export default Hero;
