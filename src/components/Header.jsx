import Logo from "../assets/Logo";

function Header() {
    return (
    <main id="landing-header" className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white">
        <div className="flex flex-grow basis-0">
            <Logo />
        </div>

        <nav>
            <ul className="flex text-sm [&>li>a]:text-white [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
                <li><a href="#"></a>Model S</li>
                <li><a href="#"></a>Model 3</li>
                <li><a href="#"></a>Model X</li>
                <li><a href="#"></a>Model Y</li>
                <li><a href="#"></a>Powerwall</li>
                <li><a href="#"></a>Carga</li>
            </ul>
        </nav>

        <nav className="flex flex-grow justify-end basis-0">
            <ul className="flex text-sm [&>li>a]:text-white [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
                <li><a href="#"></a>Soporte</li>
                <li><a href="#"></a>Tienda</li>
                <li><a href="#"></a>Cuenta</li>
                <li><a href="#"></a>Menú</li>
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
