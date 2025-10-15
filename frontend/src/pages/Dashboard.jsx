// src/pages/Dashboard.jsx
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import StatisticCard from "../components/StatisticCard";
import MentorCard from "../components/MentorCard";
import ProgressBar from "../components/Chips";
import { courses, mentors } from "../data/mockData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { MdFlipToFront } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lessons from "../components/LessonCard";

const Dashboard = () => {
  return (
    <div className="flex gap-7 min-h-screen bg-[var(--primary-white)] text-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex gap-2 pt-2 flex-col">
        {/* Top Navbar */}
        <Navbar />

        {/* Content */}
        <div className="flex flex-row items-start gap-6 justify-center">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-7 min-w-2xl">
              {/* Left Section */}
              <div className="space-y-10">
                {/* Hero / Banner */}
                <div className="grid gap-3 bg-[var(--primary-purple)] text-white rounded-3xl p-6 shadow">
                  <h3 className="uppercase tracking-widest text-sm">online courese</h3>
                  <h2 className="text-4xl font-semibold mb-2 max-w-xl">
                    Sharpen Your Skills with Professional Online Courses
                  </h2>
                  <button className="bg-black max-w-[140px]  font-medium py-2 pr-2 rounded-3xl mt-2">
                    <div className="flex flex-row gap-2.5 item-center justify-end">
                      <span>
                        Join Now
                      </span>
                      <div className="h-7 w-7 rounded-full bg-white relative">
                        <div className="absolute text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <MdKeyboardArrowRight size={21} />
                        </div>
                      </div>
                    </div>
                  </button>

                </div>

                {/* Course Progress Chips */}
                <div className="flex gap-7 overflow-x-auto py-2">
                  <ProgressBar title="U/UX Design" current={2} total={8} color={"blue"} icon={<MdOutlineDesignServices size={21} className="text-purple-600 " />} />
                  <ProgressBar title="Branding" current={3} total={8} color={"pink"} icon={<MdOutlineBrandingWatermark size={21} className="text-pink-600 " />} />
                  <ProgressBar title="Front End" current={6} total={7} color={"green"} icon={<MdFlipToFront size={21} className="text-sky-600" />} />
                </div>


                {/* Continue Watching section */}
                <div className="relative w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Continue Watching</h3>

                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 rounded-full bg-white  transition"
                      >
                        <ChevronLeft className="w-5 h-5  text-gray-400" />
                      </button>
                      <button
                        className="p-2 bg-[var(--primary-purple)] rounded-full transition"
                      >
                        <ChevronRight className="w-5 h-5 text-white bg-[var(--primary-purple)]" />
                      </button>
                    </div>
                  </div>

                  {/* Outer Wrapper: prevents overflow outside this box */}
                  <div className="relative overflow-hidden">
                    {/* Inner Scrollable Row */}
                    <div
                      className="flex gap-4  scroll-smooth  pb-2"
                    >
                      {courses.map((course) => (
                        <div key={course.id} className="flex-shrink-0 w-80 bg-white">
                          <CourseCard {...course} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Your lessons */}
                <div>
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold mb-4">YourLesson </h3>
                    <button className="text-sm text-indigo-600 hover:underline font-medium">
                      See all
                    </button>
                  </div>
                  <Lessons />
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar (Statistic + Mentors) */}
          <div className="self-start">
            <StatisticCard />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
