const Navbar = () => {
    return (
        <div className="w-full pl-8 pt-4 flex justify-between align-start">
            <div>Logo goes here</div>
            <div id='nav-links' className="pr-8 flex gap-3">
                <a href="" className="text-xl text-gray-900 hover:text-sky-950">Home</a>
                <a href="" className="text-xl text-gray-900 hover:text-sky-950">Shop</a>
                <a href="" className="text-xl text-gray-900 hover:text-sky-950">Learn More</a>
            </div>
        </div>
    )
}

export default Navbar