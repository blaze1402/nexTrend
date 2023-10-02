// import React from 'react'

import HomeSectionCarosel from "../../components/HomSectionCarosel/HomeSectionCarosel"
import MainCarosel from "../../components/HomeCarosel/MainCarosel"

function HomePage() {
  return (
    <div>
      <MainCarosel/>
        <div className="py-20 space-y-10 flex flex-col justify-center ">
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
        </div>
    </div> 
  )
}

export default HomePage
