import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Header (){
    const [isOpen, setIsOpen] = useState (false);
    useEffect(() => {
        function handleClickOutside(event) {
          if (!event.target.closest(".bi-x-lg")) {
            setIsOpen(false);
          }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);
    
      // Tutup menu ketika pindah halaman
      useEffect(() => {
        setIsOpen(false);
      }, [location.pathname]);


    return(
        <>
        <button className="absolute z-20 text-white-800 top-3 right-4 text-3xl font-bold md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
        <header className='bg-blue-400 fixed z-10 w-full flex'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center md:p-7 p-4'>
                    <div className='flex content-center'>
                        <h1 className='font-bold md:text-xl'>KAHAYAN INPRO</h1>
                    </div>
                    <div >
                        <ul className={`absolute md:gap-4 md:py-0 py-3  rounded-md md:top-0 md:right-0 right-9 md:w-full w-25 text-center top-15 md:relative md:flex md:bg-transparent bg-blue-800 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                            <li className='group'>
                                <Link to="/home" className="font-bold group-hover:text-yellow-300">Home</Link>
                            </li>
                            <li className='group'>
                                <Link to="/about" className="font-bold group-hover:text-yellow-300">About</Link>
                            </li>
                            <li className='group'>
                                <Link to="" className="font-bold group-hover:text-yellow-300">Contact</Link>
                            </li>
                            <li className='group'>
                                <Link to="/sign" className="font-bold md:flex hidden border-1 px-1 rounded-md group-hover:text-yellow-300">Sign Up</Link>
                            </li>
                            <li className='group'>
                                <Link to="" className="font-bold md:flex hidden border-1 px-1 rounded-md group-hover:text-yellow-300">Login</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className='md:hidden absolute right-14 font-bold border-1 p-1 top-4 hover:bg-green-500 rounded-md text-xs'>
                                <Link>Login</Link>
                            </li>
                            <li className='md:hidden absolute right-27 font-bold border-1 p-1 top-4 hover:bg-green-500 rounded-md text-xs'>
                                <Link to="/sign" >Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header;