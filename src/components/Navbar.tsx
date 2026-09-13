import { HiCurrencyDollar } from "react-icons/hi";
import Logo from "../assets/Group 1-1.png"

const Navbar = ({coin}: {coin:number}) => {


    return (
        <nav className="bg-blue-100">
            <div className="flex justify-between items-center w-11/12 mx-auto">
                <img src={Logo} alt="" className="w-25 h-20" />
                
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>

                <h2 className="font-bold text-3xl text-black flex gap-1 items-center"><HiCurrencyDollar />{coin}</h2>
            </div>    
        </nav>
    );
};

export default Navbar;