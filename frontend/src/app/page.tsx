import BottomNav from "./components/BottomNav";
import NavBar from "./components/NavBar";
import LandingPage from "./components/landingPage";


export default function Home() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <LandingPage/>
      </div>
    <BottomNav/>
    </div>
  );
}
