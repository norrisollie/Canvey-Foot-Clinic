import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { content } from "../../web-data";

// map contact types to icons
const iconMap = {
  address: FaMapMarkerAlt,
  phone: FaPhoneAlt,
  email: FaRegEnvelope,
};

const { globals } = content;

const contactInfo = [
  { type: "email", value: globals.contact.email },
  { type: "phone", value: globals.contact.phone },
  { type: "address", value: globals.address },
];

const contactElements = contactInfo.map(({ type, value, id }, i) => {
  // get icon component from iconMap using type
  const Icon = iconMap[type];

  // create a key using value and id/index if not available
  const key = id ?? `${type}-${i}`;

  // checks if value exists, if not return nothing (don't want to render empty divs)
  if (!value) return;

  // check if value exists and if address is type (as we need to handle address differently) and also check if value is an object
  if (value && type === "address" && typeof value === "object") {
    // turn address object in to array of values
    const addressString = Object.values(value).filter(Boolean);
    // we can join values using .join()
    return (
      <address key={key} className="flex items-center justify-end ">
        {Icon && <Icon aria-hidden="true" className="mr-1.5" />}
        {addressString.join(" • ")}
      </address>
    );
  }

  // if neither falsey or an address, return value as normal
  return (
    <div
      key={key}
      className="flex items-center sm:first:hidden md:first:flex first:justify-start last:justify-end justify-center"
    >
      {Icon && <Icon aria-hidden="true" className="mr-1.5" />}
      {
        <a
          href={`${type === "email" ? "mailto" : type === "phone" ? "tel" : ""}:${value}`}
        >
          {value}
        </a>
      }
    </div>
  );
});

function HeaderContactBar() {
  // map through contact info and return elements for each

  return (
    // hide on mobile/small screens
    <div className=" bg-brand-blue text-white w-full hidden sm:flex w-full justify-center">
      <div className="section-inner-container">
        {
          // max-width of 1280px, full width otherwise. element contains contact info
          // grid with 3 columns, each column contains one piece of contact info
        }
        <nav
          aria-label="contact"
          className="max-w-7xl w-full grid md:grid-cols-3 grid-cols-2 py-3.5 px-2.5"
        >
          {contactElements}
        </nav>
      </div>
    </div>
  );
}

export default HeaderContactBar;
