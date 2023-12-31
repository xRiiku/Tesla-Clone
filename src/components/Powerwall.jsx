function Powerwall() {
    return (
        <section id="powerwall" className="landing-section bg-black h-screen w-screen text-center relative overflow-hidden flex justify-center items-center"
        data-header-color="black">

            <div className="z-30 relative h-full flex flex-col">
                <header>
                    <h2 className="text-black pt-28 text-[40px] font-medium">Solar y Powerwall</h2>
                    <p className="text-black text-sm">Energía para todos</p>
                </header>

                <footer className="flex flex-col flex-grow justify-end pb-20">
                    <div>
                        <a className="text-white bg-black rounded 
                        font-medium px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors" href="/"> 
                        Saber más
                        </a>
                    </div>
                </footer>
            </div>

            <div className="absolute top-0 bottom-0 h-full w-full z-10">
                <img src="/powerwall.avif" alt="Powerwall" className="h-full w-full object-cover object-center"></img>
            </div>
        </section>
    )
}

export default Powerwall