import { useSite } from "../../../hooks/useSite";
import Card from "../../Card/Card";
import Section from "../Section/Section";

function Services() {
  const { data: { sections } = [] } = useSite();

  const servicesSection =
    sections.find((section) => section.meta?.name === "services") || {};

  const {
    meta: { name = "services", id = "", element = "section" } = {},
    content: { title = "Default Title", text = "", cards = [], ctas = [] } = {},
  } = servicesSection;

  console.log(`Rendering component: ${name}`);

  return (
    <Section wrapperElement={element} id={id} className="section--services">
      <div className="w-full">
        <h2 className="section__title text-center">{title}</h2>
        {text && <p className="section__text text-center">{text}</p>}

        {cards.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => {
              const {
                title: cardTitle = "",
                text: cardText = "",
                icon,
                type: cardType = "",
                cta,
                alignment = "center",
              } = card;

              return (
                <Card
                  key={`${cardTitle}-${index}`}
                  icon={icon}
                  title={cardTitle}
                  text={cardText}
                  type={cardType}
                  cta={cta}
                  alignment={alignment}
                />
              );
            })}
          </div>
        )}
        <div className="flex justify-center mt-12 bg-app-primary/10 p-6 rounded-lg border border-app-primary/10 shadow-sm text-center flex-col items-center gap-4">
          <h4 className="text-2xl font-bold text-app-primary">
            Ready to book?
          </h4>
          <p>
            Call our friendly team today to find a time that suits you. No GP
            referral required.
          </p>
          <div className="section__cta-container flex flex-col md:flex-row  gap-4">
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
        </div>
      </div>
    </Section>
  );
}

export default Services;
