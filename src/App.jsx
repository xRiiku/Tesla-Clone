import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ModelYSection from "./components/Model-Y-Section";
import { ChangeHeaderColor } from "./utils/ChangeHeaderColor";
import { HeaderHoverBG } from "./utils/HeaderHoverBG";

ChangeHeaderColor()
HeaderHoverBG()

function App() {
  return (
    <>
        <Header />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto overflow-x-hidden">
        <div className="snap-center">
          <MainSection/>
        </div>
        <div className="snap-center">
          <ModelYSection/>
        </div>
      </main>
    </>
  );
}

export default App;
