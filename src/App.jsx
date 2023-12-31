import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ModelYSection from "./components/Model-Y-Section";
import Model3Section from "./components/Model-3-Section";
import ModelSSection from "./components/Model-S-Section";
import ModelXSection from "./components/Model-X-Section";
import Powerwall from "./components/Powerwall";
import Accessories from "./components/Accesories";
import CybertruckSection from "./components/Cybertruck-Section";
import { ChangeHeaderColor } from "./utils/ChangeHeaderColor";
import { HeaderHoverBG } from "./utils/HeaderHoverBG";

function App() {
  return (
    <>
        <Header />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto overflow-x-hidden">
        <div className="snap-center">
          <MainSection/>
        </div>
        <div className="snap-center">
          <ModelSSection/>
        </div>
        <div className="snap-center">
          <ModelXSection/>
        </div>
        <div className="snap-center">
          <Model3Section/>
        </div>
        <div className="snap-center">
          <ModelYSection/>
        </div>
        <div className="snap-center">
          <CybertruckSection/>
        </div>
        <div className="snap-center">
          <Powerwall/>
        </div>
        <div className="snap-center">
          <Accessories/>
        </div>
      </main>
    </>
  );
}

ChangeHeaderColor()
HeaderHoverBG()

export default App;
