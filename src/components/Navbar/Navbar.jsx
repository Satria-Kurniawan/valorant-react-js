import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { BiMenuAltLeft } from "react-icons/bi"
import { CgClose } from "react-icons/cg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <nav className="w-full bg-black p-5 text-stone-300">
        <div className="flex justify-between mx-10">
          <div className="flex justify-center items-center gap-5">
            <img src="images/valorant-logo.png" alt="Logo" width={50} />
            <span className="font-bold uppercase">Valorant</span>
          </div>
          <button onClick={() => toggleNav()} className="md:hidden">
            {isOpen ? (
              <CgClose className="text-5xl text-red-500" />
            ) : (
              <BiMenuAltLeft className="text-5xl" />
            )}
          </button>

          <ul
            className={`${
              isOpen ? "left-0" : "-left-[100%]"
            } md:flex z-20 md:static absolute md:top-0 top-20 md:w-auto w-full md:p-0 p-5 md:px-0 px-12 md:bg-transparent bg-gray-800 text-lg font-semibold uppercase gap-5 duration-300 cursor-pointer`}
          >
            <li
              className={`hover:border-b hover:border-red-500 active md:my-0 my-4 ${
                location.pathname == "/" ? "border-b-2 border-red-500" : ""
              }`}
            >
              <Link to="/">Agents</Link>
            </li>
            <li
              className={`hover:border-b-2 hover:border-red-500 active md:my-0 my-4 ${
                location.pathname == "/competitivetiers"
                  ? "border-b-2 border-red-500"
                  : ""
              }`}
            >
              <Link to="/competitivetiers">Competitive Tiers</Link>
            </li>
            <li
              className={`hover:border-b-2 hover:border-red-500 active md:my-0 my-4 ${
                location.pathname == "/weapons"
                  ? "border-b-2 border-red-500"
                  : ""
              }`}
            >
              <Link to="/weapons">Weapons</Link>
            </li>
            <li
              className={`hover:border-b-2 hover:border-red-500 active md:my-0 my-4 ${
                location.pathname == "/maps" ? "border-b-2 border-red-500" : ""
              }`}
            >
              <Link to="/maps">Maps</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
