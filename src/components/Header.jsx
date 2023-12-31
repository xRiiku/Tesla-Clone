import Logo from "../assets/Logo";

function Header() {
    return (
    <main id="landing-header" className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white">
        <div className="flex flex-grow basis-0">
            <Logo />
        </div>

        <nav>
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
                <li><a href="#">Soporte</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Cuenta</a></li>
                <li><a href="#">Menú</a></li>
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
    </main>
    );
}

export default Header;
