import { useInView } from "react-intersection-observer";

/**
 * Reusable section wrapper with consistent vertical spacing and inner container.
 * @param {Object} props
 * @param {keyof JSX.IntrinsicElements} [props.wrapperElement="section"] HTML tag used as the outer wrapper.
 * @param {string} [props.id] Optional id attribute for anchor links.
 * @param {React.ReactNode} props.children Content rendered inside the section.
 * @param {string} [props.className=""] Extra classes appended to the wrapper.
 * @returns {JSX.Element}
 */
function Section({ wrapperElement = "section", id, children, className = "" }) {
  console.log(`Rendering component: ${id ?? "section"}`);

  const isTagName =
    typeof wrapperElement === "string" &&
    /^[a-z][a-z0-9-]*$/.test(wrapperElement);
  const WrapperElement = isTagName ? wrapperElement : "section";
  const { ref } = useInView({ threshold: 0 });

  return (
    <WrapperElement
      id={id}
      className={`section-wrapper ${className}`}
      ref={ref}
    >
      <div className="section-inner-container">{children}</div>
    </WrapperElement>
  );
}

export default Section;
