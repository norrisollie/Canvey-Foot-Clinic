import { useSiteContent } from "../../../hooks/useSiteContent";
import renderCardElements from "../../Card/renderCardElements";

import Section from "../Section/Section";
import renderTextItems from "../renderTextItems";

function Location() {
  const { getSectionByName } = useSiteContent();
  const meta = getSectionByName("location")?.meta ?? {};
  const content = getSectionByName("location")?.content ?? {};

  const { name = "location", id = "", element = "section" } = meta;
  const { title = "", text = {}, cards = [], mapEmbedUrl = "" } = content;
  const { blocks = [] } = text;
  const textBlocksClassName = `section__text-blocks section__text-blocks--${name}`;
  const textItems = renderTextItems({ blocks, sectionName: name });

  console.log(`Rendering component: ${name}`);

  const cardElements = renderCardElements(cards);
  console.log(
    `Rendered ${cardElements.length} card elements for section: ${name}`,
  );

  return (
    <Section wrapperElement={element} id={id} className="section--location">
      <div className="section__split-2col">
        <div className="section__col-text">
          <h2 className="section__title">{title}</h2>
          <div className={textBlocksClassName}>{textItems}</div>
          <div className="section__cards">{cardElements}</div>
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
