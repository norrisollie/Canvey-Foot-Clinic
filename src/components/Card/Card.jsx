function Card({ icon, title = "", text = "", cta, className = "" }) {
  const hasCta = Boolean(cta?.label);

  return (
    <article className={`card ${className}`.trim()}>
      {icon && (
        <div className="card__icon" aria-hidden="true">
          {typeof icon === "string" ? (
            <span>{icon}</span>
          ) : icon?.src ? (
            <img
              src={icon.src}
              alt={icon.alt ?? ""}
              className="h-10 w-10 object-contain"
            />
          ) : (
            icon
          )}
        </div>
      )}

      {title && <h3 className="card__title">{title}</h3>}
      {text && <p className="card__text">{text}</p>}

      {hasCta && cta.href && (
        <a href={cta.href} className="cta cta--secondary card__cta">
          {cta.label}
        </a>
      )}

      {hasCta && !cta.href && typeof cta.onClick === "function" && (
        <button
          type="button"
          onClick={cta.onClick}
          className="cta cta--secondary card__cta"
        >
          {cta.label}
        </button>
      )}
    </article>
  );
}

export default Card;
