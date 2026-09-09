import Logo from "../assets/Group 1-1.png"

const Navbar = () => {
    return (
        <nav className="bg-blue-100">
            <div className="flex justify-between w-11/12 mx-auto">
                <img src={Logo} alt="" className="w-25 h-20" />
                
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
            </div>    
        </nav>
    );
};

export default Navbar;