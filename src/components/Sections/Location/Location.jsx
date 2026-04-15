import { useSite } from "../../../hooks/useSite";

import Section from "../Section/Section";

function Location() {
  const { data: { sections } = [] } = useSite();

  const locationSection =
    sections.find((section) => section.meta?.name === "location") || {};

  const {
    meta: { name = "location", id = "", element = "section" } = {},
    content: {
      title = "Default Location Title",
      text = "",
      mapEmbedUrl = "",
    } = {},
  } = locationSection;

  console.log(`Rendering component: ${name}`);

  return (
    <Section wrapperElement={element} id={id} className="section--location">
      <div className="section__split-2col">
        <div className="section__col-text">
          <h2 className="section__title">{title}</h2>
          {text && <p className="section__text">{text}</p>}
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
