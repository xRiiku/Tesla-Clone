function ModelSSection() {
    return (
        <section id="models" className="landing-section bg-black h-screen w-screen text-center relative overflow-hidden flex justify-center items-center"
        data-header-color="black">

            <div className="z-30 relative h-full flex flex-col">
                <header>
                    <h2 className="text-black pt-28 text-[40px] font-medium">Model S</h2>
                    <p className="text-black text-sm underline">Programa una consulta virtual</p>
                </header>

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

            <div className="absolute top-0 bottom-0 h-full w-full z-10">
                <img src="/model-s.avif" alt="Model S" className="h-full w-full object-cover object-center"></img>
            </div>
        </section>
    )
}

export default ModelSSection