import { ArrowRight } from "lucide-react";

const Lessons = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-2">
      {/* Table Header */}
      <div className="grid grid-cols-4 text-sm text-gray-500 font-medium border-b border-b-gray-200 pb-2">
        <p>MENTOR</p>
        <p>TYPE</p>
        <p>DESC</p>
        <p className="text-right">ACTION</p>
      </div>

      {/* Single Row */}
      <div className="grid grid-cols-4 items-center mt-3 text-sm py-1.5 border-b border-b-gray-200">
        {/* Mentor */}
        <div className="flex items-center space-x-3">
          <img
            src="/avatars/padhang.png"
            alt="Padhang Satrio"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-800">Padhang Satrio</p>
            <p className="text-gray-500 text-xs">2/16/2004</p>
          </div>
        </div>

        {/* Type */}
        <div>
          <span className="px-3 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-700">
            UI/UX DESIGN
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 font-medium">
          Understand Of UI/UX Design
        </p>

        {/* Action */}
        <div className="text-right">
          <button className="bg-indigo-50 hover:bg-indigo-100 p-2 rounded-full transition">
            <ArrowRight className="w-4 h-4 text-indigo-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
