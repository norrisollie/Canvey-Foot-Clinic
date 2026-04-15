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
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-6 order-2 md:order-1 flex flex-col justify-center">
          <h2 className="section__title">{title}</h2>
          {text && <p className="section__text">{text}</p>}
        </div>
        <div className="md:col-span-6 order-1 md:order-2">
          <div className="aspect-square bg-amber-50">
            {mapEmbedUrl && (
              <iframe
                src={mapEmbedUrl}
                title="Clinic location map"
                className="w-full h-full rounded-lg border-0"
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
