import Video from "../assets/Video"

function MainSection() {
    return (
        <section className="bg-black h-screen w-screen text-center relative overflow-hidden flex justify-center items-center">

            <div className="z-30 relative h-full flex flex-col">
                <header>
                    <h2 className="text-white pt-28 text-[40px] font-medium">Disfrute de Tesla</h2>
                    <p className="text-white text-sm">Programe una prueba de conducción hoy mismo</p>
                </header>

                <footer className="flex flex-col flex-grow justify-end pb-20">
                    <div>
                        <a className="text-white border-[3px] border-white bg-white/5 backdrop-blur-sm rounded 
                        font-medium px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors" href="/"> 
                        Prueba de conducción
                        </a>
                    </div>
                </footer>
            </div>

            <div className="absolute top-0 bottom-0 h-full w-full z-10">
                <Video/>
            </div>
        </section>
    )
}

export default MainSection