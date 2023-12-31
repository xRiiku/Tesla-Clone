import { useState } from "react";
import Logo from "../assets/Logo";
import { ChangeHeaderColor } from "../utils/ChangeHeaderColor"
import { HeaderHoverBG } from "../utils/HeaderHoverBG"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = (prev) => {
        setIsMenuOpen(!prev)
    }

    return (
    <main id="landing-header" className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white">
        <div className="flex flex-grow basis-0">
            <Logo />
        </div>

        <nav className="hidden xl:block">
            <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
                <li><a href="#models">Model S</a></li>
                <li><a href="#modelx">Model X</a></li>
                <li><a href="#model3">Model 3</a></li>
                <li><a href="#modely">Model Y</a></li>
                <li><a href="#cybertruck">Cybertruck</a></li>
                <li><a href="#powerwall">Powerwall</a></li>
                <li><a href="#accessories">Carga</a></li>
            </ul>
        </nav>

        <nav className="flex flex-grow justify-end basis-0">
            <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
                <li className="hidden xl:block"><a href="#">Soporte</a></li>
                <li className="hidden xl:block"><a href="#">Tienda</a></li>
                <li className="hidden xl:block"><a href="#">Cuenta</a></li>
                <li onClick={() => toggleMenu(isMenuOpen)}><a href="#">Menú</a></li>
            </ul>
        </nav>

        <div
            id="menu-backdrop"
            className={`
            absolute bg-black/5 backdrop-blur-lg rounded
            translate-x-[var(--left)] translate-y-[var(--top)]
            left-0 top-0
            w-[var(--width)] h-[var(--height)]
            transition-all duration-500
            ease-in-out opacity-0 -z-10
            `}
        >
        </div>

        {/* NAV MOBILE */}
        {isMenuOpen && (
            <nav className="flex flex-col bg-white fixed top-0 left-0 right-0 bottom-0 ">
                <button onClick={() => toggleMenu(isMenuOpen)} className=" w-screen flex justify-end p-5">
                    <img className="text-black h-6 " src="/close-icon.svg" alt="close image"/>
                </button>
                <ul
                className="flex flex-col mt-4 [&>li]:m-3 [&>li>a]:flex [&>li>a]:justify-between [&>li>a]:text-black [&>li>a]:px-6 [&>li>a]:py-3 [&>li>a]:rounded-md [&>li>a]:w-full"
                >
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#home"> Home <img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a> </li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#models">Model S<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#modelx">Model X<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#model3">Model 3<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#modely">Model Y<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#cybertruck">Cybertruck<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#powerwall">Powerwall<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#accessories">Carga<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                </ul>
            </nav>
        )}

    </main>
    );
}

export default Header;

ChangeHeaderColor()
HeaderHoverBG()