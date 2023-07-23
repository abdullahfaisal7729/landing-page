import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import home from "./assets/home.jpg";
import Workflow from "./components/Workflow";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import RequestDemo from "./components/RequestDemo";
import ImageSection from "./components/ImageSection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className="grid grid-cols-3 justify-content mt-5 ml-60 mr-80 gap-5 page-icons">
        <Workflow icon={faStickyNote} />
        <Workflow icon={faUserCircle} />
        <Workflow icon={faThumbsUp} />
        <Workflow icon={faHeart} />
        <Workflow icon={faFile} />
        <Workflow icon={faAddressBook} />
      </div>
      <ImageSection></ImageSection>
      <RequestDemo />
      <Footer />
    </>
  );
}
export default App;
