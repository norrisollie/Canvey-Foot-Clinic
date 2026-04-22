import Card from "./Card";

/**
 * Render card elements based on the provided card data.
 * @param {Array} cards - An array of card objects.
 * @returns {JSX.Element[]} An array of Card components.
 */
const renderCardElements = (cards) => {
  return (
    cards.length > 0 &&
    cards.map((card, index) => {
      const {
        title = "",
        name = "",
        text = "",
        role = "",
        jobTitle = "",
        image = {},
        icon = null,
        cta,
        alignment = "center",
        direction = "horizontal",
        type = "owner",
      } = card;

      const { src = "", alt = "" } = image;

      const isOwnerCard = type === "owner";

      const resolvedTitle = isOwnerCard ? title || name : title;
      const resolvedJobTitle = isOwnerCard ? jobTitle || role : "";

      return (
        <Card
          key={index}
          type={type}
          title={resolvedTitle}
          text={text}
          alignment={alignment}
          direction={direction}
          jobTitle={resolvedJobTitle}
          image={{ src, alt }}
          icon={icon}
          cta={cta}
        />
      );
    })
  );
};
export default renderCardElements;
