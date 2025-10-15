import React from 'react';
import {
    LayoutDashboard, Mail, BookOpenText, ListChecks, Users, Settings, LogOut, Diamond,
} from 'lucide-react';
import { MdSpaceDashboard } from "react-icons/md";
import { friendsList } from '../data/mockData';

// Data for the sidebar sections
const overviewLinks = [
    { name: 'Dashboard', icon: MdSpaceDashboard, active: true },
    { name: 'Inbox', icon: Mail, active: false },
    { name: 'Lesson', icon: BookOpenText, active: false },
    { name: 'Task', icon: ListChecks, active: false },
    { name: 'Group', icon: Users, active: false },
];



const settingsLinks = [
    { name: 'Setting', icon: Settings, isLogout: false },
    { name: 'Logout', icon: LogOut, isLogout: true },
];

// Helper Component for Navigation Items (Overview/Settings)
const NavItem = ({ name, Icon, active, isLogout }) => {
    const textColor = isLogout
        ? 'text-orange-500 hover:text-orange-600'
        : active
            ? 'text-indigo-700 font-semibold'
            : 'text-gray-600 hover:text-indigo-700';

    const bgColor = active ? 'bg-indigo-50' : 'hover:bg-gray-50';

    return (
        <div
            className={`flex items-center space-x-3 p-3 ml-2 cursor-pointer transition-colors duration-150 rounded-lg ${bgColor} ${textColor}`}
        >
            <Icon
                className={active ? 'text-[var(--primary-purple)]' : isLogout ? 'text-orange-500' : 'text-black'}
                size={20}
            />
            <span className={name === 'Logout' ? "text-orange-500" : "text-xm font-semibold text-black"}>{name}</span>
        </div>
    );
};

// Helper Component for Friend Items
const FriendItem = ({ name, status, initials, color }) => (
    <div className="flex items-center space-x-3 p-2 ml-2 cursor-pointer hover:bg-gray-50 transition-colors duration-150 rounded-lg">
        {/* Avatar Placeholder */}
        <div
            className={`w-8 h-8 ${color} text-black text-xs flex items-center justify-center rounded-full flex-shrink-0`}
        >
            <img 
               src={`https://api.dicebear.com/8.x/notionists/svg?seed=${name}&radius=50&backgroundColor=b6e3f4,c0aede,d1d4f9`} 
               alt={name}
               className="w-full h-full object-cover"
             />
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">{name}</span>
            <span className="text-xs text-gray-500">{status}</span>
        </div>
    </div>
);

// Main Sidebar Component
const Sidebar = () => {
    // Use a max-w to keep it visually consistent even if the screen is huge, but use the w-[250px] for width
    return (
        <div className="w-[250px] max-w-[280px]  bg-white rounded-r-xl">

            {/* 1. Logo Section */}
            <div className="p-6 pb-4 flex items-center gap-3 flex-row">
                <div class="h-10 w-10 rounded-full bg-[var(--primary-purple)] relative overflow-hidden">
                    <img
                        src="src\assets\logo\logo.png"
                        alt="avatar"
                        class="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 h-12 w-12 object-cover rounded-full"
                    />
                </div>
                <span className="text-xl font-bold text-gray-900">Coursue</span>
            </div>

            <div className="p-4 flex flex-col gap-24">
                {/* 2. Overview Section */}
                <div className='flex flex-col gap-4'>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 px-3">
                        Overview
                    </h3>
                    <nav className="space-y-1">
                        {overviewLinks.map((link) => (
                            <NavItem
                                key={link.name}
                                name={link.name}
                                Icon={link.icon}
                                active={link.active}
                            />
                        ))}
                    </nav>


                    {/* 3. Friends section */}
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 px-3">
                        Friends
                    </h3>
                    <div className="space-y-1">
                        {friendsList.map((friend) => (
                            <FriendItem
                                key={friend.name}
                                name={friend.name}
                                status={friend.status}
                                initials={friend.initials}
                                color={friend.color}
                            />
                        ))}
                    </div>
                </div>



                {/* 4. Settings div (pushed to bottom using flex-grow in parent) */}
                <div className="mt-auto">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 px-3">
                        Settings
                    </h3>
                    <nav className="space-y-1">
                        {settingsLinks.map((link) => (
                            <NavItem
                                key={link.name}
                                name={link.name}
                                Icon={link.icon}
                                isLogout={link.isLogout}
                            />
                        ))}
                    </nav>
                </div>
            </div>


        </div>
    );
};

export default Sidebar;
