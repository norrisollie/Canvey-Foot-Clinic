import {
  getCardAlignmentClass,
  getCardDirectionClass,
  renderCardContentByType,
} from "../../helpers/cardHelpers";

function Card({
  icon = null,
  title = "",
  text = "",
  jobTitle = "",
  type = "",
  cta,
  className = "",
  alignment = "center",
  direction = "vertical",
}) {
  const hasCta = Boolean(cta?.label);

  // Get CSS classes based on alignment and direction
  const alignmentClass = getCardAlignmentClass(alignment);
  const directionClass = getCardDirectionClass(direction); //

  return (
    <article
      className={`card ${className} ${alignmentClass} ${directionClass}`.trim()}
    >
      {
        // if there is an icon
        icon && (
          <div
            className={`card__icon h-full flex justify-center items-center`}
            aria-hidden="true"
          >
            {
              // if there is an icon and is a string f
              typeof icon === "string" ? (
                // if the string is "test", render a placeholder circle
                icon === "test" && (
                  <div className="bg-brand-blue rounded-full w-10 h-10"></div>
                )
              ) : // if there is an icon and is an object with src property
              icon?.src ? (
                <img
                  src={icon.src}
                  alt={icon.alt ?? ""}
                  className="h-10 w-10 object-contain"
                />
              ) : (
                icon
              )
            }
          </div>
        )
      }
      <div
        className={`flex flex-col ${alignmentClass === "horizontal" && "items-start"} justify-center`}
      >
        {
          // Render content based on card type
          renderCardContentByType(type, title, jobTitle, text)
        }
      </div>

      {
        // if there is a cta with href
        hasCta && cta.href && (
          <a href={cta.href} className="cta cta--secondary card__cta">
            {cta.label}
          </a>
        )
      }

      {
        // if there is a cta with onClick handler and no href
        hasCta && !cta.href && typeof cta.onClick === "function" && (
          <button
            type="button"
            onClick={cta.onClick}
            className="cta cta--secondary card__cta"
          >
            {cta.label}
          </button>
        )
      }
    </article>
  );
}

export default Card;
