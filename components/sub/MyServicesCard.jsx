import React from 'react'
import { Tilt } from 'react-tilt'

const MyServicesCard = ({ icon, title, description }) => {
  return (
    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 gradient-border">
      <Tilt className="backdrop-blur-md bg-black/80 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 h-full">
        <div className="">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </Tilt>
    </div>
  )
}

export default MyServicesCard
