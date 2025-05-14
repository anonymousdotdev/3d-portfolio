import React from 'react'

const Achievements = () => {
  return (
    <div>
            {/* Achievements Section */}
            <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AchievementCard
              title="Best Web Application Award"
              description="Received recognition for developing an innovative web application that transformed client operations."
              year="2022"
            />
            <AchievementCard
              title="Open Source Contributor"
              description="Contributed to several popular open source projects with over 500+ GitHub stars."
              year="2021"
            />
            <AchievementCard
              title="Tech Conference Speaker"
              description="Presented on modern web development practices at three major tech conferences."
              year="2020"
            />
            <AchievementCard
              title="Certified Cloud Architect"
              description="Earned advanced certification in cloud architecture and implementation."
              year="2021"
            />
            <AchievementCard
              title="Hackathon Winner"
              description="Led team to first place in a 48-hour hackathon, building an innovative solution for healthcare."
              year="2019"
            />
            <AchievementCard
              title="5-Star Client Rating"
              description="Maintained perfect client satisfaction rating across 20+ major projects."
              year="2018-Present"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievements