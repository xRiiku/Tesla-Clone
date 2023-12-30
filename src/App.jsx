import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
        <Header />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto overflow-x-hidden">
        <div className="snap-center">
          <HeroSection/>
        </div>
        <div className="snap-center">
          <HeroSection/>
        </div>
        <div className="snap-center">
          <HeroSection/>
        </div>
        <div className="snap-center">
          <HeroSection/>
        </div>
        <div className="snap-center">
          <HeroSection/>
        </div>
      </main>
    </>
  );
}

export default App;
