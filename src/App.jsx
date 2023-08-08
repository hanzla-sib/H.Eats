import Food from "./Components/Food";
import HeadLineCards from "./Components/HeadLineCards";
import Hero from "./Components/Hero";
import MainCourse from "./Components/MainCourse";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
  <div>
    <Navbar />
    <Hero />
    <HeadLineCards />
    <Food />
    <MainCourse />
  </div>
  )
}