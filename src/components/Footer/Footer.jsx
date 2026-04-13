import { content } from "../../web-data";

const {
  globals: { openingHours, address },
} = content;

function Footer() {
  const now = new Date();

  const dayOfTheWeek = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    timeZone: "Europe/London",
  }).format(now);

  const openingHoursList = openingHours.map(
    ({ day, isClosed, open, close }) => {
      const isToday = day === dayOfTheWeek;

      return (
        <div className={`flex justify-between ${isToday ? "font-bold" : ""}`}>
          <div className="">{day}</div>
          <div>{isClosed ? "Closed" : `${open} - ${close}`}</div>
        </div>
      );
    },
  );

  // turn address object in to array of values
  const addressLines = Object.values(address);

  const addressElement = addressLines.map((line, index) => (
    <span key={`address-line-${index}`}>
      {line}
      <br />
    </span>
  ));

  return (
    <footer className="footer flex justify-center w-full bg-brand-blue text-white py-12">
      <div className="section-inner-container grid grid-cols-3 gap-12">
        <div className="footer__contact col-span-full sm:col-span-1">
          <h6 className="footer__heading text-2xl font-bold mb-1.5">
            Opening Hours
          </h6>
          <div>{openingHoursList}</div>
        </div>
        <div className="footer_address col-span-full sm:col-span-1">
          <h5 className="footer__heading text-2xl font-bold mb-1.5 text-brand">
            Contact Us
          </h5>
          <div className="mb-3">
            <h6 className="font-bold text-lg">Address</h6>
            <address>{addressElement}</address>
          </div>
          <div className="mb-3">
            <h6 className="font-bold text-lg">Email</h6>
            <p>
              <a href={`mailto:${content.globals.contact.email}`}>
                {content.globals.contact.email}
              </a>
            </p>
          </div>
          <div className="mb-3">
            <h6 className="font-bold text-lg">Phone Number</h6>
            <p>
              <a href={`tel:${content.globals.contact.phone}`}>
                {content.globals.contact.phone}
              </a>
            </p>
          </div>
        </div>
        <div className="footer_address col-span-full sm:col-span-1">
          <h5 className="footer__heading text-2xl font-bold mb-1.5 text-brand">
            Quick Links
          </h5>
          <nav aria-label="Footer quick links" className="mb-3">
            <ul className="space-y-1.5">
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-full text-center border-t border-white/10 pt-12">
          <p>
            Copyright © {new Date().getFullYear()} Canvey Foot Clinic. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
