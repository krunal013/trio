import { FaCalendarAlt } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { BsRocketTakeoff } from "react-icons/bs";
import { GiThreeFriends } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";


const perks = [
  {
    icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
    bg: "bg-blue-100",
    text: "5 Working Days",
  },
  {
    icon: <BsRocketTakeoff className="text-red-600 text-2xl" />,
    bg: "bg-pink-100",
    text: "Growth-encouraging Culture",
  },
  {
    icon: <GiThreeFriends className="text-green-600 text-2xl" />,
    bg: "bg-green-100",
    text: "Supportive Teammates",
  },
  {
    icon: <GiClothes className="text-orange-500 text-2xl" />,
    bg: "bg-orange-100",
    text: "Relaxed Dress Code",
  },
  {
    icon: <HiOutlineComputerDesktop className="text-zinc-600 text-2xl" />,
    bg: "bg-zinc-100",
    text: "Latest Tools & Software Access",
  },
  {
    icon: <MdCastForEducation className="text-yellow-600 text-2xl" />,
    bg: "bg-yellow-100",
    text: "Learning Sessions",
  },
];

const Perks = () => {
  return (
    <section className="py-10  md:px-0 ">
      <span className="text-left text-3xl md:text-4xl font-bold">
        Perks of <span className="text-blue-500">Working With Us</span> 
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto mt-5 lg:mt-8">
        {perks.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 border rounded-2xl bg-white  hover:shadow-md transition-all duration-200"
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}
            >
              {item.icon}
            </div>

            <p className="font-semibold text-zinc-800">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Perks;
