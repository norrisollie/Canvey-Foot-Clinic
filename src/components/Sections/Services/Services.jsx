import { useSite } from "../../../hooks/useSite";
import Card from "../../Card/Card";
import Section from "../Section/Section";

function Services() {
  const { data: { sections } = [] } = useSite();

  const servicesSection =
    sections.find((section) => section.meta?.name === "services") || {};

  const {
    meta: { name = "services", id = "", element = "section", isDark } = {},
    content: { title = "Default Title", text = "", cards = [] } = {},
  } = servicesSection;

  console.log(`Rendering component: ${name}`);

  return (
    <Section
      wrapperElement={element}
      id={id}
      className={`section--services ${isDark ? "section--dark" : ""}`}
    >
      <div className="w-full">
        <h2 className="section__title">{title}</h2>
        {text && <p className="section__text">{text}</p>}

        {cards.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => {
              const {
                title: cardTitle = "",
                text: cardText = "",
                icon,
                cta,
              } = card;

              return (
                <Card
                  key={`${cardTitle}-${index}`}
                  icon={icon}
                  title={cardTitle}
                  text={cardText}
                  cta={cta}
                />
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}

export default Services;
