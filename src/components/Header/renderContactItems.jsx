import { BsFillMapFill, BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

const renderContactItems = (items, global) => {
  // loop through items and render based on type
  const contactItems = items.map((item, index) => {
    const value = global[item];
    console.log(`Rendering contact item: ${item} with value: ${value}`);

    // if address
    if (typeof value === "object" && item === "address") {
      // find address parts, check for truthy values, and join with separator
      const addressString = Object.values(value).filter(Boolean).join(" • ");

      // render address
      return (
        <div
          className="contact-bar__item-wrapper hidden xl:flex items-center justify-end"
          key={`div-${index}`}
        >
          <BsFillMapFill className="mr-2" />
          <address
            key={`address-${index}`}
            className="contact-bar__item flex items-center"
          >
            {addressString}
          </address>
        </div>
      );

      // if email
    } else if (item === "email") {
      return (
        <div
          className="contact-bar__item-wrapper hidden md:flex items-center"
          key={`div-${index}`}
        >
          <BsEnvelopeFill className="mr-2" />
          <a
            key={`a-${index}`}
            href={`mailto:${value}`}
            className="contact-bar__item"
          >
            {value}
          </a>
        </div>
      );
    }

    // should be phone number left, render as tel link

    if (item !== "phone") {
      console.warn(
        `Unknown contact item type: ${item}, rendering as phone number by default.`,
      );
    }

    // render phone number as tel link
    return (
      <div
        className="contact-bar__item-wrapper flex items-center"
        key={`div-${index}`}
      >
        <BsTelephoneFill className="mr-2" />
        <a
          key={`a-${index}`}
          href={`tel:${value}`}
          className="contact-bar__item"
        >
          {value}
        </a>
      </div>
    );
  });

  return contactItems;
};

export default renderContactItems;
