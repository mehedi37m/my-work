import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Michael Kaizer",
    title: "CEO of Basecamp Corp",
  },
  {
    text: "Robot programming involves writing software instructions that allow robots to interact with their environment and perform specific tasks. These instructions define how a robot perceives its surroundings, makes decisions, and executes movements. Common programming languages used in robotics include C++, Python, Java, and C#",
    name: "Alpha Spark",
    title: "Digital Venture Building Specialists",
  },
  {
    text: "Gamma Pulse is a deep-tech company specializing in pulsed power technology, driving innovation across diverse fields. Our expertise in plasma physics, advanced electronics, and software development allows us to develop cutting-edge solutions that address critical challenges.",
    name: "Gamma Pulse",
    title: "Experts in Plasma Solutions",
  },
  {
    text: "CipherNova is a leading cyber company in the Tennessee Valley which is attributed to many years of experience in cybersecurity, software design & development, systems engineering, and training. In addition to providing businesses with the foundation for innovation and creativity.",
    name: "Cypher Nova",
    title: "Plasma Solutions",
  },
  {
    text: "We pride ourselves on being extremely competitive within the soft furnishings market, and endeavour to price match all of our high street and online competitors wherever possible. If you have seen this same fabric for a better price anywhere else, please contact us today to give us the opportunity to better our price.",
    name: "Falcon Zen.",
    title: "This fabric is part of the Girones Stripe Upholstery Collection",
  },
];

const Constant = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const testimonial = testimonials[index];

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-lg text-black ">
            Frequently asked <br />
            question
          </h1>
        </div>
        <h1 className="text-2xl md:text-5xl flex justify-center pb-10 text-black ">
          Constant collaboration is how we <br /> roll. Lets See if we are a
          good fit.
        </h1>

        <div className="space-y-2 pb-5">
          <div tabIndex={0} className="collapse collapse-plus  text-black">
            <div className="collapse-title font-semibold text-4xl">
              <span className="text-red-900 mr-10">01</span> Why should I choose
              Humestic?
            </div>
            <div className="collapse-content text-sm pl-28">
              Bottleneck mice my capacity is full , nor incentivization we need
              to start advertising on social media, or helicopter view for what
              the . lets put a pin in that we need to build it so that it
              scales, are there any leftovers in the kitchen?, if you are not
              hurting you are not wining loop back
            </div>
          </div>
          <hr />
          <div tabIndex={0} className="collapse collapse-plus  text-black">
            <div className="collapse-title font-semibold text-4xl">
              <span className="text-red-900 mr-10">02</span> I like your works,
              how do we start a project?
            </div>
            <div className="collapse-content text-sm pl-28">
              Bottleneck mice my capacity is full , nor incentivization we need
              to start advertising on social media, or helicopter view for what
              the . lets put a pin in that we need to build it so that it
              scales, are there any leftovers in the kitchen?, if you are not
              hurting you are not wining loop back
            </div>
          </div>
          <hr />
          <div tabIndex={0} className="collapse collapse-plus text-black">
            <div className="collapse-title font-semibold text-4xl">
              <span className="text-red-900 mr-10">03</span> What info is
              required to get a quotation?
            </div>
            <div className="collapse-content text-sm pl-28">
              Bottleneck mice my capacity is full , nor incentivization we need
              to start advertising on social media, or helicopter view for what
              the . lets put a pin in that we need to build it so that it
              scales, are there any leftovers in the kitchen?, if you are not
              hurting you are not wining loop back
            </div>
          </div>
          <hr />
        </div>

        <div>
          <div className=" mx-auto px-6 py-12  text-gray-900 font-sans">
            <blockquote className="text-2xl md:text-3xl md:h-56 font-medium leading-relaxed">
              “{testimonial.text}”
            </blockquote>

            <div className="flex justify-between items-center">
              <div className="mt-10 flex-1 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                <div>
                  <div className="font-semibold text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.title}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex-1 flex items-center justify-between max-w-xs">
                <button
                  onClick={prev}
                  className="px-8 py-5 rounded-full border text-gray-800 hover:bg-gray-100"
                >
                  <ArrowLeft size={24} />
                </button>

                <span className="text-gray-800 font-medium">
                  {String(index + 1).padStart(2, "0")}/
                  <span className="text-gray-400">
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                </span>

                <button
                  onClick={next}
                  className="px-8 py-5 rounded-full bg-blue-900 text-white hover:bg-blue-800"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constant;
