import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Header from "../Components/Header";
import Home from "../Components/Home";
import About from "../Components/About";
import Resume from "../Components/Resume";
import Project from "../Components/Project";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Home/>
      <About/>
      <Resume/>
      <Project/>
      <Footer/>
     
    </>
  );
}

export default MyApp;
