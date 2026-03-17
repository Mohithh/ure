import Image from "next/image";
import Navbar from "./components/navbar";
import Leadership from "./components/leadership";
import Awards from "./components/awards";
import Careers from "./components/careers";
import Footer from "./components/footer";
import Slides from "./components/slides";
import About from "./components/about";
import Practices from "./components/practices";
export default function Home() {
  return (
    <div className="">
     <Navbar/>
     <Slides/>
     <About/>
     <Practices/>
     <Leadership/>     
     <Awards/>
     <Careers/>
     <Footer/>
     
    </div>
  );
}