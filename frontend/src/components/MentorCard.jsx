
const MentorCard = ({ name, role }) => {
  return (
    <div className="flex items-center justify-between p-3.5 rounded-xl transition-shadow duration-200 hover:shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="relative w-12 h-12">
          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold overflow-hidden border-2 border-white shadow-sm">
             
             <img 
               src={`https://api.dicebear.com/8.x/notionists/svg?seed=${name}&radius=50&backgroundColor=b6e3f4,c0aede,d1d4f9`} 
               alt={name}
               className="w-full h-full object-cover"
             />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-black border-2 border-white rounded-full"></div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800">{name}</span>
          <span className="text-xs text-gray-500">{role}</span>
        </div>
      </div>

      <button className="px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors">
        Follow
      </button>
    </div>
  );
};

export default MentorCard;