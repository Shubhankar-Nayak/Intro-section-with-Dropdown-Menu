import React, { useState, useEffect, useRef } from 'react'
import threelines from '../assets/images/icon-menu.svg'
import down from '../assets/images/icon-arrow-down.svg'
import up from '../assets/images/icon-arrow-up.svg'
import todo from '../assets/images/icon-todo.svg'
import calendar from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'
import close from '../assets/images/icon-close-menu.svg'

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div ref={dropdownRef} className="relative">
        <p onClick={toggleDropdown} className="cursor-pointer flex items-center hover:text-gray-600">
          {title} <img className="size-2 ml-1" src={isOpen ? up : down} alt="Dropdown" />
        </p>

        {isOpen && (
          <div className="laptop:w-[12vw] laptop:absolute flex flex-col bg-white laptop:shadow-xl rounded-lg mt-2 px-4 py-5 space-y-2 w-40 z-10">
            {children}
          </div>
        )}
      </div>
    );
  };
  

const DropdownItem = ({ icon, label }) => {
    return (
      <a
        href="#"
        className="flex justify-start items-center px-2 py-1 space-x-2 hover:text-gray-600"
      >
        {icon && <img src={icon} alt={label} className="w-4 h-4 mx-2" />}
        <span>{label}</span>
      </a>
    );
  };

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-fit px-5 py-2 fixed top-0 flex justify-between items-center bg-white">
      {/* Left Section */}
      <div className="flex items-center space-x-8">
        <h1 className="text-[30px] font-semibold">snap</h1>
        {/* Navigation Links */}
        <div className="hidden laptop:flex space-x-6 font-medium">
          <Dropdown title="Features">
            <DropdownItem icon={todo} label="Todo List" />
            <DropdownItem icon={calendar} label="Calendar" />
            <DropdownItem icon={reminders} label="Reminders" />
            <DropdownItem icon={planning} label="Planning" />
          </Dropdown>
          <Dropdown title="Company">
            <DropdownItem label="History" />
            <DropdownItem label="Our Team" />
            <DropdownItem label="Blog" />
          </Dropdown>
          <a href="#" className="hover:text-gray-600">Careers</a>
          <a href="#" className="hover:text-gray-600">About</a>
        </div>
      </div>

      {/* Right Section */}
      <div className="laptop:hidden">
        <img
          src={threelines}
          alt="Menu"
          className="cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <div className='hidden laptop:flex gap-8 font-medium'>
        <button>Login</button>
        <button className='px-4 py-2 border-[black] border-2 rounded-xl'>Register</button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
        {/* Overlay */}
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>

        {/* Mobile Menu */}
        <div className="fixed h-screen top-0 right-0 w-[70vw] max-w-[300px] bg-white shadow-md p-4 flex flex-col space-y-4 z-20 font-medium">
          <div className="flex justify-end">
            <img src={close} alt="close" onClick={toggleMenu} />
          </div>
          <Dropdown title="Features">
            <DropdownItem icon={todo} label="Todo List" />
            <DropdownItem icon={calendar} label="Calendar" />
            <DropdownItem icon={reminders} label="Reminders" />
            <DropdownItem icon={planning} label="Planning" />
          </Dropdown>
          <Dropdown title="Company">
            <DropdownItem label="History" />
            <DropdownItem label="Our Team" />
            <DropdownItem label="Blog" />
          </Dropdown>
          <a href="#" className="hover:text-gray-600">Careers</a>
          <a href="#" className="hover:text-gray-600">About</a>
          <button>Login</button>
          <button className="px-4 py-2 border-[black] border-2 rounded-xl">Register</button>
        </div>
      </>
      )}
    </div>
  )
}

export default NavBar