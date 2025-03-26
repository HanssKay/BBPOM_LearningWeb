import learn from "../aset/learn.png";
import { Link } from "react-router";



const Home = () => {
    return(
        <>
        <div className="flex justify-center w-full -z-10 h-screen bg-gradient-to-b from-[var(--color-one)] to-[var(--color-two)]">
            <div className="flex gap-40 relative items-center">
                <div className="flex flex-col ">
                    <h1 className="flex flex-col md:text-4xl font-bold">Mari Ikuti Program Magang <br/>bersama Kahayan Inpro </h1>
                    <p className="mt-2">Bergabunglah dengan program magang eksklusif kami dan dapatkan
                        <br/> pengalaman kerja nyata yang akan membentuk masa depan kariermu.
                        <br/> Belajar langsung dari para profesional dan tingkatkan keterampilanmu sekarang. </p>
                    <button className="w-40 mt-3 border-1 p-1 rounded-md hover:bg-blue-300">
                        <Link to="/sign">Daftar Sekarang </Link>
                    </button>
                </div>
                <div className="flex ">
                    <img className=" h-90" src={learn} alt="" />
                </div>
            </div>  
        </div>
        </>
    )
}

export default Home;