function NavBarLayout() {
    return (
        <header className="flex justify-between items-center mb-8 max-w-2xl mx-auto">
            <div className="flex space-x-4">
                <button className="text-2xl">☼</button>
                <button className="text-2xl">☾</button>
                <button className="text-2xl">⧉</button>
            </div>
            <nav>
                <a href="#about" className="mr-4 underline">about</a>
                <a href="#skills" className="mr-4 underline">skills</a>
                <a href="#achievements" className="mr-4 underline">achievements</a>
                <a href="#qualifications" className="mr-4 underline">qualifications</a>
                <a href="#projects" className="mr-4 underline">projects</a>
                <a href="#contact" className="underline">contact</a>
            </nav>
        </header>
    )
}

export default NavBarLayout