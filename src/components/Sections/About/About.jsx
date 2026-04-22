import { useSiteContent } from "../../../hooks/useSiteContent";
import Section from "../Section/Section";
import renderCardElements from "../../Card/renderCardElements";
import renderTextItems from "../renderTextItems";

function About() {
  const { getSectionByName } = useSiteContent();
  const meta = getSectionByName("about")?.meta ?? {};
  const content = getSectionByName("about")?.content ?? {};

  const { name = "about", element = "section", id = "about" } = meta;
  const { title = "", text = {}, cards = [] } = content;
  const { blocks = [] } = text;
  const textBlocksClassName = `section__text-blocks section__text-blocks--${name}`;
  const textItems = renderTextItems({ blocks, sectionName: name });

  const cardElements = renderCardElements(cards);

  console.log(`Rendering component: ${name}`);

  return (
    <Section wrapperElement={element} id={id} className="section--about">
      <div className="section__split-2col">
        <div className="section__col-text">
          <h2 className="section__title">{title}</h2>
          <div className={textBlocksClassName}>{textItems}</div>
          <div className="owner-card-wrapper grid grid-cols-2 gap-6 mt-6">
            {cardElements}
          </div>
        </div>
        <div className="section__col-media">
          <div className="section__media-placeholder"></div>
        </div>
      </div>
    </Section>
  );
}

export default About;
