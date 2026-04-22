const renderTextItems = (data = {}) => {
  const { blocks = [], sectionName = "" } = data;

  const leadClassName = `${sectionName}__block ${sectionName}__block--lead mb-3 sm:mb-4 md:mb-5`;
  const bodyClassName = `${sectionName}__block ${sectionName}__block--body mb-2 sm:mb-2.5 md:mb-3`;

  return blocks.map((block, index) => {
    const { type, variant, text } = block;

    if (type === "paragraph") {
      if (variant === "lead") {
        return (
          <p
            className={leadClassName}
            key={index}
            dangerouslySetInnerHTML={{ __html: text ?? "" }}
          ></p>
        );
      } else if (variant === "body") {
        return (
          <p
            className={bodyClassName}
            key={index}
            dangerouslySetInnerHTML={{ __html: text ?? "" }}
          ></p>
        );
      } else {
        console.warn(`Unknown paragraph variant: ${variant}`);
      }
    } else {
      console.warn(`Unknown block type: ${type}`);
    }

    return null;
  });
};

export default renderTextItems;
