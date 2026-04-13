import { useSiteContent } from "../../hooks/useSiteContent";

function ContactBar() {
  const { global, layout } = useSiteContent();
  const contactBar = layout.contactBar ?? {};
  const name = contactBar.meta?.name ?? "contact-bar";
  const items = contactBar.content?.items ?? [];

  console.log(`Rendering component: ${name}`);

  const contactElements = items.map((item, index) => {
    const value = global[item];

    // handle if object and an address
    if (typeof value === "object" && item === "address") {
      const addressString = Object.values(value).filter(Boolean).join(" • ");
      return (
        <address
          key={index}
          className="contact-bar--item flex items-center justify-end"
        >
          {addressString}
        </address>
      );
    } else if (item === "email") {
      return (
        <a key={index} href={`mailto:${value}`} className="contact-bar--item">
          {value}
        </a>
      );
    } else if (item === "phone") {
      return (
        <a key={index} href={`tel:${value}`} className="contact-bar--item">
          {value}
        </a>
      );
    }

    return null;
  });

  return (
    <div className="contact-bar">
      <div className="section-inner-container">
        <nav
          aria-label="contact"
          className="max-w-7xl w-full grid md:grid-cols-3 grid-cols-2 py-3.5 px-2.5 content-fit"
        >
          {contactElements}
        </nav>
      </div>
    </div>
  );
}
export default ContactBar;
