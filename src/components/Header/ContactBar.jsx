import renderContactItems from "./renderContactItems";
import { useSiteContent } from "../../hooks/useSiteContent";

function ContactBar() {
  const { global, layout } = useSiteContent();
  const contactBar = layout.contactBar ?? {};
  const name = contactBar.meta?.name ?? "contact-bar";
  const items = contactBar.content?.items ?? [];

  console.log(`Rendering component: ${name}`);

  const contactElements = renderContactItems(items, global);

  console.log(`Rendered contact elements:`, contactElements);

  return (
    <div className="contact-bar__wrapper">
      <div className="section-inner-container">
        <nav aria-label="contact" className="contact-bar__nav">
          {contactElements}
        </nav>
      </div>
    </div>
  );
}
export default ContactBar;
