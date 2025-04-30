import robot from "../../assets/robot.avif";
import other from "../../assets/other.jpg"
import { TbTriangleSquareCircle } from "react-icons/tb";
import { BiWindows } from "react-icons/bi";


const Banner = () => {
    return (
       <div className="bg-white">
            <div className=" container mx-auto border-2 py-20 flex justify-between ">
          <div className="border flex-1">
             <h1 className="text-black text-8xl mb-10">Your AI- <br /> Powered <br /> Sales Coach</h1>
             <div className="flex mb-10 justify-between">
              <div className=" bg-slate-50 shadow-lg"> <img className="h-44 rounded-xl" src={robot} alt="" /></div>
              <p className="text-2xl ml-20">Get real-time coaching, script <br /> suggestion, and deal-closing <br /> strategies powered by advanced AI <br /> technology</p>
             </div>

           <div className="flex justify-between text-black">

            <div className="flex items-center ">
                <div className="text-7xl text-blue-500 mr-10 bg-slate-50 p-4 shadow-xl rounded-lg">
                <BiWindows></BiWindows>
                </div>
                <h1 className="text-4xl font-bold ">2000+ <br />
                <span className="text-xl text-gray-500 font-normal">Your protection</span></h1>
                
              </div>
              
              <div className="flex items-center">
                <div className="text-7xl text-blue-500 mr-10  bg-slate-50 p-4 shadow-xl rounded-lg">
                <TbTriangleSquareCircle ></TbTriangleSquareCircle>
                </div>
                <h1 className="text-4xl font-bold">7001+ <br />
                <span className="text-xl font-normal text-gray-500">Provide tailored</span></h1>
              </div>
              
            </div>
          </div>

          <div className="border flex-1">
            <div className="relative">
              <img className="w-[400px]" src={other} alt="" />
              <div className="w-max absolute  h-72 border-blue-300 p-10 bg-white shadow-2xl rounded-2xl"> 
                <div className="flex justify-between">
                  <h1 className="text-5xl pb-4  text-blue-800 font-bold">721+</h1>
                  <h1 className="text-5xl pb-4 text-blue-800 font-bold">1000+</h1>
                </div>
                <h1 className="text-3xl text-black font-bold">Growth is our priority</h1>
                <p>As a full-service business agency, we <br />specialize in helping companies of all sizes <br /> optimize their operations</p>
              </div>

            </div>
          </div>
               
        </div>
       </div>
    );
};

export default Banner;