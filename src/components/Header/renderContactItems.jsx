const renderContactItems = (items, global) => {
  // loop through items and render based on type
  items.map((item, index) => {
    const value = global[item];
    console.log(`Rendering contact item: ${item} with value: ${value}`);

    // if address
    if (typeof value === "object" && item === "address") {
      // find address parts, check for truthy values, and join with separator
      const addressString = Object.values(value).filter(Boolean).join(" • ");

      // render address
      return (
        <address
          key={index}
          className="contact-bar__item flex items-center justify-end"
        >
          {addressString}
        </address>
      );

      // if email
    } else if (item === "email") {
      // render email as mailto link
      return (
        <a key={index} href={`mailto:${value}`} className="contact-bar__item">
          {value}
        </a>
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
      <a key={index} href={`tel:${value}`} className="contact-bar__item">
        {value}
      </a>
    );
  });
};

export default renderContactItems;
