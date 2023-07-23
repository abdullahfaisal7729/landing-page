import "./App.css";
import Navbar from "./components/Navbar";
// import "./App.css";
import Header from "./components/Header";
import logo from "./logo.jpeg";
import home from "./home.jpg";
import final from "./final.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import Image from "./components/Image";
import "./index.css";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <nav
        className="mx-auto ps-6 pt-4"
        style={{
          color: "#6d7685",
        }}
      >
        <div className="flex flex-row-start items-center justify-between">
          <div
            className="flex space-x-10 ml-56"
            style={{
              fontSize: "14px",
              color: "#3c4554",
            }}
          >
            <img
              src={logo}
              style={{ width: 30, height: 30 }}
              alt="Error in image"
            ></img>
            <a href="/" className="text-darkGrayishBlue hover:text-white">
              Pricing
            </a>
            <a href="/" className="text-darkGrayishBlue hover:text-white">
              Product
            </a>
            <a href="/" className="text-darkGrayishBlue hover:text-white">
              About
            </a>
            <a href="/" className="text-darkGrayishBlue hover:text-white">
              Blog
            </a>
            <a href="/" className="text-darkGrayishBlue hover:text-white">
              Wall of Love
            </a>
            <a href="/" className="text-darkGrayishBlue hover:text-white">
              Resources
            </a>
          </div>
          <div className="flex space-x-10 pb-6 mr-32">
            <a href="/" className="hover:text-darkGrayishBlue">
              Sign in
            </a>
            <a
              href="/"
              className="hover:text-darkGrayishBlue"
              style={{
                marginTop: "-4px",
              }}
            >
              Request Demo{" "}
              <span
                style={{
                  fontSize: "20px",
                  color: "#2f3f69",
                }}
              >
                &#8594;
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* <Header></Header> */}
      <section
        id="#header"
        className="ml-64"
        style={{
          color: "white",
        }}
      >
        {/* Container */}
        <div className="flex flex-row mt-10">
          {/* left */}
          <div className="flex flex-col mb-32 space-y-5">
            <p
              className="max-w-md text-4xl font-bold"
              style={{
                fontSize: "48px",
                fontFamily: "serif",
                width: "400px",
                lineHeight: "2.7rem",
              }}
            >
              Create stunning web experiences
            </p>
            <p className="max-w-sm text-darkGrayishBlue">
              Our landing page template works on all devices, so you only have
              to set it up once and get beautiful results forever
            </p>
            <div className="space-x-1">
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Request Demo
              </button>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Explore Products
              </button>
            </div>
          </div>
          {/* right */}
          <div className="" style={{}}>
            <img
              src={home}
              style={{ width: 450, height: 325 }}
              alt="Error in image"
            ></img>
          </div>
        </div>
      </section>

      <div
        className="grid grid-cols-3 justify-content mt-5 ml-60 mr-80 gap-5 main-icons"
        style={
          {
            // height: "60vh",
            // alignItems: "center",
            // justifyContent: "center",
            // backgroundColor: "white",
            // marginTop: "110px",
          }
        }
      >
        {/* Elements */}
        <Workflow icon={faStickyNote} />
        <Workflow icon={faUserCircle} />
        <Workflow icon={faThumbsUp} />
        <Workflow icon={faHeart} />
        <Workflow icon={faFile} />
        <Workflow icon={faAddressBook} />
      </div>
      <ImageSection></ImageSection>

      {/* <div className='grid grid-cols-3 mt-10 mb-10 ml-40 mr-40 gap-x-[-14px]'    
    >
      <Image/>
      <Image/>
      <Image/>
      </div> */}
      {/* Element Section End */}
      {/* Section Before Footer Start */}
      <RequestDemo />
      <Footer />
      {/* Section Before Footer End */}
    </>
  );
}
export default App;
