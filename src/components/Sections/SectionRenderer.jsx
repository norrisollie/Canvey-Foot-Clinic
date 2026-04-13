import { useSite } from "../../hooks/useSite";

import Footer from "../Footer/Footer";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Location from "./Location/Location";
import Services from "./Services/Services";

/**
 * Renders an array of component sections, based on type provided in metadata. If type is not recognised, renders a default Section component with the section id as content.
 * @param {Array} sections - An array of section objects, each containing meta and content data.
 * @returns {React.ReactElement[]} - An array of React elements representing the rendered sections.
 */

function SectionsRenderer() {
  console.log("Rendering component: sections-renderer");

  const { data } = useSite();

  // destructure sections from data, with default empty array to prevent errors if data is missing
  const { sections = [] } = data || {};

  const ComponentMap = {
    hero: Hero,
    footer: Footer,
    about: About,
    services: Services,
    location: Location,
    contact: Contact,
  };

  const renderedSections = sections.map((section, index) => {
    // Drestructure meta and content from section, set default values to handle missing data and prevent errors
    const { meta = {}, content = {} } = section;

    // Destructure type, id and element from meta, with default values to prevent errors if data is missing
    const { name = "section", id = "" } = meta;

    // create a unique key for each section using id or type, with index as fallback
    const sectionKey = `${id ?? name ?? "section"}-${index}`;

    // Pass the following props to each component:
    // - element: which html element to use for wrapper
    // - metaData: entire meta object
    // - sectionData: entire content object

    // if type matches a component in the ComponentMap, use that component, otherwise default to Section
    const Component = ComponentMap[name] || Section;

    return (
      <Component
        key={sectionKey}
        metaData={meta}
        sectionData={content}
        id={id}
      />
    );
  });

  return renderedSections;
}

export default SectionsRenderer;
