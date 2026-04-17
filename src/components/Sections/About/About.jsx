import { useSiteContent } from "../../../hooks/useSiteContent";
import Section from "../Section/Section";
import Card from "../../Card/Card";

function About() {
  const { getSectionByName } = useSiteContent();
  const meta = getSectionByName("about")?.meta ?? {};
  const content = getSectionByName("about")?.content ?? {};

  const { name = "about", element = "section", id = "about" } = meta;
  const { title = "", text = {}, cards = [] } = content;
  const { blocks = [] } = text;

  console.log(`Rendering component: ${name}`);

  return (
    <Section wrapperElement={element} id={id} className="section--about">
      <div className="section__split-2col">
        <div className="section__col-text">
          <h2 className="section__title">{title}</h2>
          <div>
            {blocks.map((block, index) => {
              const { type, variant, text } = block;
              // handle paragraph
              if (type === "paragraph") {
                if (variant === "lead") {
                  // Render lead paragraph
                  return (
                    <p
                      className="about__block about__block--lead mb-4"
                      key={index}
                    >
                      {text}
                    </p>
                  );
                } else if (variant === "body") {
                  // Render body paragraph
                  return (
                    <p
                      className="about__block about__block--body mb-2.5"
                      key={index}
                    >
                      {text}
                    </p>
                  );
                } else {
                  console.warn(`Unknown paragraph variant: ${variant}`);
                }
              } else {
                console.warn(`Unknown block type: ${type}`);
              }
            })}
          </div>
          <div className="owner-card-wrapper grid grid-cols-2 gap-6 mt-6">
            {cards.length > 0 &&
              cards.map((owner, index) => {
                const { name = "", role = "", image = {}, icon = null } = owner;
                const { src = "", alt = "" } = image;
                const { alignment, direction, type } = owner;
                return (
                  <Card
                    key={index}
                    title={name}
                    text={role}
                    type={type ?? "owner"}
                    alignment={alignment ?? "center"}
                    direction={direction ?? "horizontal"}
                    jobTitle={owner.jobTitle ?? ""}
                    image={{ src, alt }}
                    icon={icon}
                  />
                );
              })}
          </div>
        </div>
        <div className="section__col-media">
          <div className="section__media-placeholder">image</div>
        </div>
      </div>
    </Section>
  );
}

export default About;
