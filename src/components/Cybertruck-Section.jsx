function CybertruckSection() {
    return (
        <section id="cybertruck" className="landing-section bg-black h-screen w-screen text-center relative overflow-hidden flex justify-center items-center"
        data-header-color="black">

            <div className="z-30 relative h-full flex flex-col">

                <footer className="flex flex-col flex-grow justify-end pb-20">
                    <div className="flex mx-auto gap-x-4">
                        <a className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded 
                        font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500" href="/"> 
                        Pedido personalizado
                        </a>

                        <a className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black
                        hover:text-white inline-flex justify-center items-center text-black" href="/"> 
                        Saber más
                        </a>
                    </div>
                </footer>
            </div>

            <div className="hidden sm:block absolute top-0 bottom-0 h-full w-full z-10">
                <img src="/cybertruck.avif" alt="Cybertruck" className="h-full w-full object-cover object-center"></img>
            </div>

            <div className="sm:hidden absolute top-0 bottom-0 h-full w-full z-10">
                <img src="/cybertruck-mobile.avif" alt="Cybertruck" className="h-full w-full object-cover object-center"></img>
            </div>
        </section>
    )
}

export default CybertruckSection