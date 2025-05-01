import pic1 from "../../assets/programming1.jpeg";
import pic2 from "../../assets/programming1.webp";



const PromoBanner = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto space-y-10">
        <div className="md:flex items-center justify-between">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold text-black">Our Courses</h1>
            <h1 className="text-xl  text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus accusamus <br /> suscipit quas reprehenderit obcaecati
              cumque veniam .
            </h1>
          </div>
          <button className=" rounded-xl bg-blue-900 text-white py-5 px-5 hover:bg-yellow-700">
            View All{" "}
          </button>
        </div>

        <div className="md:flex justify-between gap-5">
          <div className="bg-slate-100 p-8 rounded-lg md:w-[700px] ">
            <div className="card text-black  shadow-sm">
              <figure>
                <img className="h-96"
                  src={pic1}
                  alt="robot"
                />
              </figure>
              <div className="pt-5 flex justify-between items-center">
                <div className=" flex justify-start  gap-5">
                  <div className="py-2 px-3 bg-white rounded-lg ">4 Weeks</div>
                  <div className="py-2 px-3 bg-white rounded-lg ">Beginner</div>
                </div>
                <h1>By John Smith</h1>
              </div>
              <div className=" pt-7 space-y-5 ">
                <h2 className="card-title">
                  Web Design Fundamentals
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                  Learn the fundamentals of web design, including HTML, CSS and
                  responsive design principles. Develop the skills to create
                  visually appealing.
                </p>
                <button className="btn btn-block bg-blue-900 text-white">
                  Get it Now
                </button>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 p-8 rounded-lg md:w-[700px] ">
            <div className="card text-black  shadow-sm">
              <figure>
                <img className="h-96"
                   src={pic2}
                  alt="robot"
                />
              </figure>
              <div className="pt-5 flex justify-between items-center">
                <div className=" flex justify-start  gap-5">
                  <div className="py-2 px-3 bg-white rounded-lg ">4 Weeks</div>
                  <div className="py-2 px-3 bg-white rounded-lg ">Beginner</div>
                </div>
                <h1>By John Smith</h1>
              </div>
              <div className=" pt-7 space-y-5 ">
                <h2 className="card-title">
                  Web Design Fundamentals
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                  Learn the fundamentals of web design, including HTML, CSS and
                  responsive design principles. Develop the skills to create
                  visually appealing.
                </p>
                <div className=""><button className="btn btn-block bg-blue-900 text-white">
                  Get it Now
                </button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
