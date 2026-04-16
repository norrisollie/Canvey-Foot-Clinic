import { useSiteContent } from "../../../hooks/useSiteContent";

import Section from "../Section/Section";

function Location() {
  const { getSectionByName } = useSiteContent();
  const meta = getSectionByName("location")?.meta ?? {};
  const content = getSectionByName("location")?.content ?? {};

  const { name = "location", id = "", element = "section" } = meta;
  const { title = "", text = {}, mapEmbedUrl = "" } = content;
  const { blocks = [] } = text;

  console.log(`Rendering component: ${name}`);

  return (
    <Section wrapperElement={element} id={id} className="section--location">
      <div className="section__split-2col">
        <div className="section__col-text">
          <h2 className="section__title">{title}</h2>
          <div>
            {blocks.map((block, index) => {
              const { type, variant, text } = block;

              if (type === "paragraph") {
                if (variant === "lead") {
                  return (
                    <p className="lead mb-4" key={index}>
                      {text}
                    </p>
                  );
                }

                if (variant === "body") {
                  return (
                    <p className="mb-2.5" key={index}>
                      {text}
                    </p>
                  );
                }

                console.warn(`Unknown paragraph variant: ${variant}`);
                return null;
              }

              console.warn(`Unknown block type: ${type}`);
              return null;
            })}
          </div>
        </div>
        <div className="section__col-media">
          <div className="section__media-placeholder">
            {mapEmbedUrl && (
              <iframe
                src={mapEmbedUrl}
                title="Clinic location map"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Location;
