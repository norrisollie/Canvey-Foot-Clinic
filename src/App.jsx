import Header from "./components/Header/Header";
import SectionsRenderer from "./components/Sections/SectionRenderer";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { useSite } from "./hooks/useSite";

function App() {
  console.log("Rendering component: app");

  const shrinkHeader = false;

  // custom hook to access site context, which provides loading and error states
  const { loading, error } = useSite();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <main className="main-wrapper">
        <Header shrinkHeader={shrinkHeader} />
        <SectionsRenderer />
        <Footer />
      </main>
    </>
  );
}

export default App;
