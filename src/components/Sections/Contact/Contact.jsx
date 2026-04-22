import { useState } from "react";
import { useSiteContent } from "../../../hooks/useSiteContent";
import Section from "../Section/Section";

function Contact() {
  const { getSectionByName } = useSiteContent();
  const meta = getSectionByName("contact")?.meta ?? {};
  const content = getSectionByName("contact")?.content ?? {};

  const { name = "contact", element = "section", id = "contact" } = meta;
  const { title = "", text = "", form = {} } = content;
  const { fields = [], submitLabel = "Send" } = form;

  console.log(`Rendering component: ${name}`);

  // takes fields from content, creates an object with key and values (empty) to be used as initial state for form values
  const emptyValues = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  // set initial state to the empty values object created above
  const [values, setValues] = useState(emptyValues);

  // function to handle changes to form, updates values in state
  function handleChange(e) {
    const { name: fieldName, value } = e.target;
    setValues((prev) => ({ ...prev, [fieldName]: value }));
  }

  // function to handle submission, prevent default prevents form from refreshing page
  function handleSubmit(e) {
    e.preventDefault();
    // form submission to be wired up
  }

  return (
    <Section wrapperElement={element} id={id} className="section--contact">
      <div className="section__split-2col">
        <div className="section__col-text">
          <h2 className="section__title">{title}</h2>
          {text && <p className="section__text">{text}</p>}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-app-primary/10 p-6 rounded-3xl border border-app-primary/10 shadow-sm"
            action="https://formspree.io/f/xgopdrnq"
            method="POST"
          >
            {fields.map((field) => {
              const { name: fieldName, label, type, required } = field;
              const inputClass =
                "w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2";

              return (
                <div key={fieldName} className="flex flex-col gap-1">
                  <label htmlFor={fieldName} className="text-sm font-medium">
                    {label}
                    {required && (
                      <span className=" ml-1" aria-hidden="true">
                        *
                      </span>
                    )}
                  </label>
                  {type === "textarea" ? (
                    <textarea
                      id={fieldName}
                      name={fieldName}
                      rows={5}
                      required={required}
                      value={values[fieldName]}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  ) : (
                    <input
                      id={fieldName}
                      name={fieldName}
                      type={type}
                      required={required}
                      value={values[fieldName]}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  )}
                </div>
              );
            })}

            <button
              type="submit"
              className="cta cta--primary cta--is-full-width mt-2"
            >
              {submitLabel}
            </button>
          </form>
        </div>
        <div className="section__col-media">
          {/* cards with contact info to be added here */}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
