import { useSiteContent } from "../../../hooks/useSiteContent";
import Section from "../Section/Section";

function About() {
  const { getSectionByName } = useSiteContent();
  const meta = getSectionByName("about")?.meta ?? {};
  const content = getSectionByName("about")?.content ?? {};

  const { name = "about", element = "section", id = "about" } = meta;
  const { title = "", text = {}, image = {}, owners = [] } = content;
  const { blocks = [] } = text;

  console.log(`Rendering component: ${name}`);

  return (
    <Section wrapperElement={element} id={id} className="section--about">
      <div className="w-full grid grid-cols-12">
        <div className="col-span-6">
          <h2 className="section__title">{title}</h2>
          <div>
            {blocks.map((block, index) => {
              const { type, variant, text } = block;
              // handle paragraph
              if (type === "paragraph") {
                if (variant === "lead") {
                  // Render lead paragraph
                  return (
                    <p className="lead text-lg mb-4" key={index}>
                      {text}
                    </p>
                  );
                } else if (variant === "body") {
                  // Render body paragraph
                  return (
                    <p className="text-base mb-2.5" key={index}>
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
          <div className="owner-card-wrapper grid grid-cols-2 gap-6">
            {owners.length > 0 &&
              owners.map((owner, index) => {
                const { name = "", role = "", image = {} } = owner;
                const { src = "", alt = "" } = image;
                return (
                  <Card
                    key={index}
                    title={name}
                    text={role}
                    image={{ src, alt }}
                  />
                );
              })}
          </div>
        </div>
        <div className="col-span-6">
          <div>image</div>
        </div>
      </div>
    </Section>
  );
}

export default About;
