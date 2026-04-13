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
      <div className="w-full">
        <h2 className="section__title">{title}</h2>
        {text && <p className="section__text">{text}</p>}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <address>
              {
                // Assuming the address is stored in a global variable called "address"
              }
            </address>
          </div>
          <div>
            {mapEmbedUrl && (
              <iframe
                src={mapEmbedUrl}
                title="Clinic location map"
                className="w-full h-80 rounded-lg border-0"
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
