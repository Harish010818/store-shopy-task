import { BsThreeDotsVertical } from "react-icons/bs";

const Chips = ({ title, current, total, color, icon }) => {
      return (
            <div className="bg-white w-56 h-20 flex flex-row pl-2 gap-1 justify-items-start items-center rounded-2xl relative">
                  <div
                    className={`h-14 w-14 rounded-3xl relative 
                               ${color === "blue"
                                    ? "bg-purple-100"
                                    : color === "pink"
                                          ? "bg-pink-100"
                                          : color === "green"
                                                ? "bg-sky-100"
                                                : "bg-gray-200" // fallback if none matches
                              }
                         `}
                  >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              {icon}
                        </div>
                  </div>
                  <div >
                        <span className="text-gray-400 text-sm">{current}/{total}watched</span>
                        <p className=" ">{title}</p>
                  </div>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <BsThreeDotsVertical size={20} className="text-gray-400" />
                  </div>
            </div>
      )
}

export default Chips;