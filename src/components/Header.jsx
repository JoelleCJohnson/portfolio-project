export default function Header() {
    return (
        <header className="flex flex-row w-full justify-between text-slate-50">
        <h1 className="font-bold text-xl">Joelle Johnson</h1>
        <nav>
            <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </header>
    );
    }