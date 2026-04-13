const getSectionNames = (listOfSections) => {
  return listOfSections
    .filter((section) => section.meta.isLink)
    .map((section) => section.meta.id);
};

export default getSectionNames;
