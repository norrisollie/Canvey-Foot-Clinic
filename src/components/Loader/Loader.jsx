import loaderImage from "../../assets/loader.svg";

function Loader() {
  console.log("Rendering component: loader");

  return (
    <div className="loader">
      <div className="w-25 h-25">
        <img className="w-full h-full" src={loaderImage} alt="Loading..." />
      </div>
    </div>
  );
}

export default Loader;
