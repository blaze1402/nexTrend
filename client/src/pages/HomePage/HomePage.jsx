// import React from 'react'

import { mens_kurta } from "../../Data/mens_kurta"
import HomeSectionCarosel from "../../components/HomSectionCarosel/HomeSectionCarosel"
import MainCarosel from "../../components/HomeCarosel/MainCarosel"

function HomePage() {
  return (
    <div>
      <MainCarosel/>
        <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarosel data={mens_kurta} SectionName={"Men's kurta"} />
          <HomeSectionCarosel data={mens_kurta} SectionName={"Ladies kurta"} />
          <HomeSectionCarosel data={mens_kurta} SectionName={"Shoes"} />
          <HomeSectionCarosel data={mens_kurta} SectionName={"Jeans"} />
          <HomeSectionCarosel data={mens_kurta} SectionName={"Langha"} />
        </div>
    </div> 
  )
}

export default HomePage
