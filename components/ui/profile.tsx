import { IMAGE } from "@/assets";
import React, { useEffect, useRef, useState } from "react";
// import profilePhoto from "../../assets/avatar1.jpeg";
import logo from "../../assets/logoShah.png"
import { avatar1 } from "@/assets";
export default function Profile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  console.log(avatar1);

  return (
    <section className="bg-gray-2 py-20 dark:bg-dark">
      <div className="container">
        <div className="flex justify-center">
          <div className="relative inline-block">
            <button
              ref={trigger}
              // onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-left"
            >
              <div className="relative  h-[42px] w-[42px] rounded-full">
                <img
                  src={avatar1?.src}
                  alt="avatar"
                  className="h-full w-full rounded-full object-cover object-center"
                />
                <span className="absolute -right-0.5 -top-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark animate-pulse"></span>
              </div>
             
          
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
}
