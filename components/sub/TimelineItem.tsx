import React from 'react'

const  TimelineItem = ({ year, title, company, description, isLast = false })=> {
  return (
    <div className={`ml-6 md:ml-0 md:grid md:grid-cols-5 md:gap-10 relative ${!isLast ? "mb-10" : ""}`}>
      {/* <div className="md:col-span-1 mb-2 md:mb-0 md:text-right">
        <span className="text-sm font-semibold text-purple-400">{year}</span>
      </div> */}
      <div className="md:col-span-4 backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
        <div className="absolute -left-[9px] md:left-[20%] top-1 h-4 w-4 rounded-full bg-purple-500"></div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-purple-400 mb-2">{company}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export default TimelineItem