function Error({
  message = "An error occurred while loading the site. Please refresh the page or try again later.",
}) {
  console.log("Rendering component: error");

  return <div className="error-view">{message}</div>;
}

export default Error;
