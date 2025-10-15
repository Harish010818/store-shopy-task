import { IoMdMail } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="flex flex-row gap-4 items-center justify-between w-full">
            <input
                placeholder="Search your course..."
                className="flex-1 rounded-3xl px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <div class="flex flex-row gap-5 items-center p-4">
                <div class="h-12 w-12 rounded-full border border-gray-300 relative">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <IoMdMail className="h-4 w-4 text-black" />
                    </div>
                </div>

                <div class="h-12 w-12 rounded-full border border-gray-300 relative">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <IoIosNotifications className="h-5 w-5 text-black" />
                    </div>
                </div>

                <div class="h-10 w-px bg-gray-300"></div>

                <div class="flex flex-row gap-3 justify-center items-center">
                    <div class="h-12 w-12 rounded-full bg-indigo-100 relative overflow-hidden">
                        <img
                            src="src\assets\user_avatar\user-avatar.png"
                            alt="avatar"
                            class="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 h-12 w-12 object-cover rounded-full"
                        />
                    </div>


                    <p class="text-lg font-semibold">Jason Ranti</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;