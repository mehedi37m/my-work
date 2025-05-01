import {
  FaThumbsUp,
  FaThumbsDown,
  FaRegCopy,
  FaVolumeUp,
  FaFileAlt,
  FaCommentDots,
} from "react-icons/fa";

const suggestions = [
  "How do I handle objections?",
  "Give me a cold email template",
  "Closing techniques",
  "Negotiation tips",
];

const StudentWork = () => {
  return (
    <div className="bg-blue-700 py-14">
      <div className="container mx-auto">
        <h1 className="text-2xl text-yellow-500 mb-5">Live Ai Coach</h1>
        <h1 className="text-5xl text-blue-100">Take a Suggestion Coaching</h1>
        <div className="md:flex items-center gap-10">
          <div className="md:flex items-center gap-10  mt-10">
            <div className="flex-1 md:h-[500px] bg-white rounded-2xl shadow-lg p-4">
              <div className="border-b pb-3 mb-3">
                <h2 className="text-lg font-semibold">AI Sales Coach</h2>
              </div>

              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div className="bg-gray-100 p-3 rounded-xl text-sm max-w-xl">
                  Hello! Im your AI sales coach. How can I help you improve your
                  sales performance today?
                </div>
              </div>

              <div className="pt-56">
                <div className="flex flex-wrap gap-2 mb-4">
                  {suggestions.map((text, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-gray-200 text-sm rounded-full hover:bg-gray-300"
                    >
                      {text}
                    </button>
                  ))}
                </div>

                <div className="flex items-center border rounded-full px-4 py-2">
                  <input
                    type="text"
                    placeholder="Ask anything you need"
                    className="flex-1 outline-none bg-transparent text-sm"
                  />
                  <button className="bg-blue-600 text-white rounded-full px-4 py-1 ml-2 hover:bg-blue-700 text-sm">
                    Send ↑
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-10  bg-white rounded-full py-10 px-5 shadow-lg">
              <FaThumbsUp className="text-gray-500 hover:text-blue-600 cursor-pointer" />
              <FaThumbsDown className="text-gray-500 hover:text-red-600 cursor-pointer" />
              <FaRegCopy className="text-gray-500 hover:text-gray-700 cursor-pointer" />
              <FaVolumeUp className="text-gray-500 hover:text-green-600 cursor-pointer" />
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <div>
              <div className="max-w-md bg-gray-100 p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">
                  Real-time Analysis
                </h2>

                <div className="mb-4 p-4 bg-white rounded-xl border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">
                      ✅ Confidence Level
                    </span>
                    <span className="text-sm text-gray-600">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-gray-700">
                      📈 Confidence Level
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    85% improvement in objection handling
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 p-6 rounded-2xl max-w-md shadow-md py-8">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">
                  Quick Actions
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl flex items-center space-x-3 hover:shadow cursor-pointer transition">
                    <FaFileAlt className="text-blue-900 text-xl" />
                    <span className="text-sm font-medium text-gray-800">
                      Generate Script
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl flex items-center space-x-3 hover:shadow cursor-pointer transition">
                    <FaCommentDots className="text-blue-900 text-xl" />
                    <span className="text-sm font-medium text-gray-800">
                      Practice Pitch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentWork;
