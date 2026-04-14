// jsdoc

/**
 * Get the CSS class for card direction based on the provided direction value.
 * @param {string} direction - The direction value.
 * @returns {string} The corresponding CSS class.
 * Valid direction options are "horizontal" and "vertical". Defaults to "horizontal" if an invalid value is provided. e.g card--direction-horizontal, card--direction-vertical
 */
const getCardDirectionClass = (direction) => {
  // Valid direction options
  const directionOptions = ["horizontal", "vertical"];
  if (direction === "vertical") {
    return "card--direction-vertical";
  }

  if (direction !== "horizontal") {
    console.warn(
      `Invalid direction value: ${direction}. Expected one of: ${directionOptions.join(", ")}. Defaulting to horizontal.`,
    );
  }

  return "card--direction-horizontal";
};

/**
 * Get the CSS class for card alignment based on the provided alignment value.
 * @param {string} alignment - The alignment value.
 * @returns {string} The corresponding CSS class.
 * Valid alignment options are "left", "center", and "right". Defaults to "center" if an invalid value is provided. e.g card--alignment-left, card--alignment-center, card--alignment-right
 */
const getCardAlignmentClass = (alignment) => {
  // Valid alignment options
  const alignmentOptions = ["left", "center", "right"];

  if (alignment === "left") {
    return "card--alignment-left";
  }

  if (alignment === "right") {
    return "card--alignment-right";
  }

  if (alignment !== "center") {
    console.warn(
      `Invalid alignment value: ${alignment}. Expected one of: ${alignmentOptions.join(", ")}. Defaulting to center.`,
    );
  }
  return "card--alignment-center";
};

const renderCardContentByType = (type, title, jobTitle, text) => {
  if (type === "owner") {
    console.log(
      `Rendering owner card with title: ${title}, jobTitle: ${jobTitle}, text: ${text}`,
    );
    return (
      <>
        {title && <h3 className="card__title">{title}</h3>}
        {jobTitle && <p className="card__job-title">{jobTitle}</p>}
        {text && <p className="card__text">{text}</p>}
      </>
    );
  }
  console.log(`Rendering default card with title: ${title}, text: ${text}`);

  return (
    <>
      {title && <h3 className="card__title card__title--service">{title}</h3>}
      {text && <p className="card__text card__text--service">{text}</p>}
    </>
  );
};

export {
  getCardAlignmentClass,
  getCardDirectionClass,
  renderCardContentByType,
};
