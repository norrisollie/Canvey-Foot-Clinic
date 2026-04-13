const createAddressElement = (address) => {
  // turn address object in to array of values
  const addressLines = Object.values(address);

  const addressElement = addressLines.map((line, index) => (
    <span key={`address-line-${index}`}>
      {line}
      <br />
    </span>
  ));
  return addressElement;
};

export default createAddressElement;
