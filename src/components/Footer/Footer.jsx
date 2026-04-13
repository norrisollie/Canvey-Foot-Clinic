import Section from "../Sections/Section/Section";
import FooterColumn from "./FooterColumn";

function Footer({ data = {} }) {
  const { meta = {}, content = {} } = data;
  const { name = "footer", element = "footer", id = "" } = meta;
  const { columns = [] } = content;

  console.log(`Rendering component: ${name}`);

  const columnElements = columns.map((column, index) => (
    <FooterColumn key={index} data={column} />
  ));
  return (
    <Section wrapperElement={element} id={id} className="footer">
      <div className="section-inner-container grid grid-cols-3 gap-12">
        {columnElements}
      </div>
    </Section>
  );
}

export default Footer;
