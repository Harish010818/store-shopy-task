// CourseCard.jsx
import { Heart } from "lucide-react";

const CourseCard = ({ image, category, title, mentor, tagColor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-24 object-cover"
        />
        <button className="absolute top-3 right-3 bg-white/70 hover:bg-white rounded-full p-1.5 transition">
          <Heart className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Category Tag */}
        <span
          className={`text-xs font-medium px-3 py-1 rounded-md ${tagColor} bg-opacity-10`}
        >
          {category}
        </span>

        {/* Title */}
        <h4 className="mt-3 font-semibold text-gray-800 leading-snug">
          {title}
        </h4>

        {/* Mentor Info */}
        <div className="flex items-center mt-4">
          <img
            src={`https://api.dicebear.com/8.x/notionists/svg?seed=${mentor.name}&radius=50&backgroundColor=b6e3f4,c0aede,d1d4f9`}
            alt={mentor.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="ml-3 text-sm">
            <p className="font-medium text-gray-800">{mentor.name}</p>
            <p className="text-gray-500 text-xs">{mentor.role}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-indigo-500 h-1.5 rounded-full w-2/5"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
