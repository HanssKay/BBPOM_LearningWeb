import { Link } from "react-router";
import learn from "../aset/learn.png";
import learn2 from "../aset/learn2.png";
import learn3 from "../aset/learn3.png";
import learn4 from "../aset/learn4.png";


const About = () => {
    return (
        <>
        <div className="bg-one flex h-screen">
            <div className="w-full justify-center md:mt-27 md:ms-9 mt-14">               
                <div className="mt-5">
                    <h1 className="lg:text-3xl md:text-3xl text-blue-900">Tentang</h1>
                    <h1 className="lg:text-6xl md:text-4xl font-extrabold text-blue-900">KAHAYAN INPRO</h1>
                </div>
                <div className="flex md:justify-end justify-center md:mt-[-90px] mt-35 me-15 gap-2" >
                    <img className="lg:h-40 md:h-30 h-25 mt-5 " src={learn4} alt="" />
                    <img className="lg:h-40 md:h-30 h-25 " src={learn2} alt="" />
                    <div class="absolute rounded-s-md right-0 lg:top-76 md:top-60 top-92 lg:w-140 md:w-100 w-90 md:h-[18px] h-[10px] bg-gradient-to-l from-blue-500 to-white-500"></div>
                </div>
            </div>
        </div>
        {/* <Link to="/" className="absolute top-29 text-green-500 hover:underline transition duration-300">
                Kembali ke Beranda
        </Link> */}
        </>
    )
}

export default About ;