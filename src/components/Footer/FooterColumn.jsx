function FooterColumn({ data }) {
  console.log(`Rendering component: ${data?.title ?? "footer-column"}`);

  // handle items

  // handle special case for copyright column which is full width and has no items, just text
  if (data.title === "Copyright") {
    return (
      <div className="footer-column footer-column--copyright">
        <div>{data.text}</div>
      </div>
    );
  }

  // handle object with items
  if (data.items) {
    // todo handle different item types (text, link etc)
    const items = data.items.map((item) => {
      // handle links with href and label
      if (item.href && item.label) {
        return (
          <a href={item.href} className="block">
            {item.label}
          </a>
        );
      } else {
        // todo handle any other cases, blank div for now
        return <div>Unknown item type</div>;
      }
    });

    return (
      <div className="footer-column">
        <h3 className="text-2xl font-bold mb-1.5 text-brand">{data.title}</h3>
        <div>{items}</div>
      </div>
    );
  }

  return (
    <div className="footer-column">
      <h3 className="text-2xl font-bold mb-1.5 text-brand">{data.title}</h3>
      <div>{data.text}</div>
    </div>
  );

  // todo: handle different column tyes
}

export default FooterColumn;
