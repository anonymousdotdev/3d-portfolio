import React from 'react'

const MyServicesCard = ({ icon, title, description }) => {
  return (
    <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
  )
}

export default MyServicesCard
