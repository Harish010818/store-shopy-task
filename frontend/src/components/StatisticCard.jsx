import React from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import { barChartData, mentors } from '../data/mockData';
import MentorCard from './MentorCard';




const BarItem = ({ value, max, label, color }) => {
  // Calculate height percentage relative to the max bar height (h-full of the container)
  const heightPercent = `${(value / max) * 100}%`;

  return (
    <div className="flex flex-col items-center justify-end h-full">
      <div className={`w-10 rounded-t-lg transition-all duration-700 ${color}`} style={{ height: heightPercent }}></div>
    </div>
  );
};



const StatisticCard = () => {
  const yAxisValues = [60, 40, 20];
  const progressPercent = 32;

  // SVG Calculation for the progress ring
  const radius = 60;
  const strokeWidth = 6; // REDUCED FROM 8 TO 6 for thinner ring
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  const avatarSize = 'h-[100px] w-[100px]';

  return (
    <div className="w-[320px] h-full rounded-3xl bg-white relative p-4 mr-4">
      {/* Header (Statistic and Three Dots) */}
      <div className="flex justify-between items-center px-2 pt-2 pb-5">
        <div className="text-xl font-semibold text-gray-900">Statistic</div>
        <MoreVertical size={20} className="text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="relative w-32 h-32 mb-4">

          {/* SVG Progress Ring */}
          <svg className="absolute inset-0" viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
            <circle
              stroke="#ede9fe"
              fill="transparent"
              strokeWidth={4}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            {/* Progress Ring (Dark Purple) */}
            <circle
              stroke="#6E62E5"
              fill="transparent"
              strokeWidth={4} 
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              style={{
                strokeDasharray: circumference,
                strokeDashoffset,
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
                strokeLinecap: "round",
              }}
            />
          </svg>


          {/* Inner Avatar Placeholder */}
          <div className={`absolute inset-0 flex items-center justify-center rounded-full overflow-hidden p-2`}>
            <div className={`${avatarSize} rounded-full bg-purple-50 flex items-center justify-center overflow-hidden`}>
              <img
                src="src\assets\user_avatar\user-avatar.png"
                alt="User Jason"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute text-[10px] top-0 right-0 transform translate-x-1 translate-y-1 px-1.5 py-1 font-bold text-white bg-[#6E62E5] rounded-full shadow-md">
            {progressPercent}%
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-800">
          Good Morning Jason <span role="img" aria-label="fire">🔥</span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Continue your learning to achieve your target!
        </p>
      </div>

      {/* 2. Bar Chart Section */}
      <div className="bg-gray-50  rounded-xl p-5 pt-7 mt-6 mb-8 shadow-inner relative">
        <div className="flex h-32">
          <div className="w-8 flex flex-col justify-between text-xs font-medium text-gray-400 text-right pr-2 pb-1">
            {yAxisValues.map((value, index) => (
              <div key={index} className="leading-none">{value}</div>
            ))}
          </div>

          <div className="flex-1 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {yAxisValues.map((_, index) => (
                <div key={index} className="border-t border-gray-300 border-opacity-50 border-dashed"></div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-4 h-full items-end relative pt-1">
              {barChartData.map((item, index) => (
                <BarItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* X-Axis Labels (below the chart, aligned to the bars) */}
        <div className="flex justify-between text-xs text-gray-500 mt-2 pl-8">
          {barChartData.slice(0, 3).map((item, index) => (
            <div key={index} className="text-center w-1/3 px-1">{item.label}</div>
          ))}
        </div>
      </div>

      {/* 3. Your Mentors Section */}
      <div className="p-2 pt-0">
        <div className="flex justify-between items-center px-1 mb-2">
          <h3 className="text-lg font-semibold text-gray-800">Your mentor</h3>
          {/* Plus icon on the right */}
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
            <Plus size={18} />
          </button>
        </div>

        <div className="space-y-2">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} {...mentor} />
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-6 text-center">
          <button className="w-full py-2.5 text-indigo-600 font-semibold bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard

