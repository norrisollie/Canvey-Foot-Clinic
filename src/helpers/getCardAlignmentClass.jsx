const alignmentOptions = ["left", "center", "right"];

/**
 * Get the CSS class for card alignment based on the provided alignment value.
 *
 * @param {string} alignment - The desired alignment value ("left", "center", or "right").
 * @returns {string} The corresponding CSS class for the card alignment.
 */
const getCardAlignmentClass = (alignment) => {
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

  return "";
};

export default getCardAlignmentClass;
