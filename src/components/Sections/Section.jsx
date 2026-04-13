function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`w-full py-12 ${className}`}>
      <div className="section-inner-container">{children}</div>
    </section>
  );
}

export default Section;
