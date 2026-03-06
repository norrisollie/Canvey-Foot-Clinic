const globals = {
  address: {
    line1: "83 High Street",
    line2: "Canvey Island",
    line4: "SS8 7AB",
  },
  openingHours: [
    { day: "Monday", isClosed: false, open: "9am", close: "5pm" },
    { day: "Tuesday", isClosed: false, open: "9am", close: "5pm" },
    { day: "Wednesday", isClosed: false, open: "9am", close: "5pm" },
    { day: "Thursday", isClosed: false, open: "9am", close: "5pm" },
    { day: "Friday", isClosed: false, open: "9am", close: "5pm" },
    { day: "Saturday", isClosed: true, open: "", close: "" },
    { day: "Sunday", isClosed: true, open: "", close: "" },
  ],
  contact: {
    email: "hello@canveyfootclinic.co.uk",
    phone: "01268 564965",
  },
};

const content = {
  globals,
  pages: {
    home: {
      title: "Canvey Foot Clinic",
      sections: [
        {
          id: "hero",
          type: "hero",
          payload: {
            title: "Comfortable feet start here.",
            subtitle:
              "Helping you move through life more comfortably from Canvey.",
            cta: ["Book Appointment", "Find out more"],
            image: {
              src: "/images/hero.jpg",
              alt: "Reception at Canvey Foot Clinic",
            },
          },
        },
        {
          id: "services",
          type: "services",
          payload: {
            intro:
              "We deliver clinic-grade foot health care for hard skin, corns, and nail concerns, all in a calm environment.",
            items: [
              {
                title: "Nail care",
                copy: "Precision trimming, fungal treatment guidance, and on-site care for thick or ingrown nails.",
              },
              {
                title: "Hard skin & corns",
                copy: "Gentle removal, advice on footwear, and a plan to keep you walking comfortably.",
              },
              {
                title: "Diabetic foot checks",
                copy: "Year-round surveillance, risk grading, and referral-ready reports when needed.",
              },
            ],
            moreInfo:
              "Tailored foot health care for each foot, using the latest tools and sterilisation routines.",
          },
        },
        {
          id: "footer",
          type: "footer",
          payload: {
            footerCopy:
              "Proudly serving Canvey Island with reliable foot health care.",
            globalsRef: ["contact", "address", "openingHours"],
          },
        },
      ],
    },
  },
};

export default content;
export { content };
