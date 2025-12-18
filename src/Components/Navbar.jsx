const Navbar = ()=>{
    return (
        <nav className='bg-pink-400/40 px-3 h-fit py-1 justify-between flex gap items-center flex-row mx-auto'>
            <div className="logo science-gothic text-2xl font-bold text-white">🔐<span className="text-black bg-pink-600/40">K</span>eyper</div>
            <ul>
                <li className = "text-white science-gothic flex gap-2">
                    <a href = 'https://www.linkedin.com/in/tanseer-ahmad-a5a01831b/' target="_blank"><img className="hover:translate-y-1 w-8 ease-in-out duration-75" src = "linkedin.png"/></a>
                    <a href = 'https://www.instagram.com/_tanseer_ahmad_/' target="_blank" ><img className="hover:translate-y-1 w-8 ease-in-out duration-75" src = "instagram.png"/></a>
                </li>
            </ul>
        </nav>
    )

}
export default Navbar