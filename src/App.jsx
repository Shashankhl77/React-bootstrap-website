import Nav from "./component/navbar";
import Addres from "./component/addres";
import Footer from "./component/footer";
import Partner from "./component/partner";
import About from "./component/about";
import Callback from "./component/callback";
import Sevice from "./component/sevice";
import Hero from "./component/hero";
import Banner from "./component/banner";
import './App.css'
function App() {
  return ( <>
  <Nav/>
  <Hero/>
  <About/>
  <Sevice/>
  <Banner/>
  <Partner/>
  <Callback/>
  <Addres/>
  <Footer/>
  </> );
}

export default App;