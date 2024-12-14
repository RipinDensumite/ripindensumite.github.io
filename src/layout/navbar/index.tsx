// function NavBarLayout() {

//     const navItems = [
//         { href: "#about", label: "About" },
//         { href: "#skills", label: "Skills" },
//         { href: "#achievements", label: "Achievements" },
//         { href: "#qualifications", label: "Qualifications" },
//         { href: "#projects", label: "Projects" },
//         { href: "#contact", label: "Contact" },
//     ]

//     return (
//         <header className="flex justify-between items-center mb-8 max-w-2xl mx-auto">
//             <div className="flex space-x-4">
//                 {/* <button className="text-2xl">☼</button>
//                 <button className="text-2xl">☾</button>
//                 <button className="text-2xl">⧉</button> */}
//             </div>
//             <nav className="overflow-auto">
//                 {
//                     navItems.map((item, index) => (
//                         <a key={index} href={item.href} className="mr-4 underline">{item.label}</a>
//                     ))
//                 }
//             </nav>
//         </header>
//     )
// }

function NavBarLayout() {

    return (
        <header className="flex justify-center items-center mb-8 max-w-2xl mx-auto">
            <nav className="overflow-auto text-center cursor-default">
                <h1>RipinDensumite Portfolio</h1>
                <p className="text-sm">Last updated: 14 DECEMBER 2024</p>
            </nav>
        </header>
    )
}

export default NavBarLayout