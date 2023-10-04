import { mens_kurta } from "../../Data/mens_kurta"
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel"
import MainCarousel from "../../components/HomeCarousel/MainCarousel"
import Footer from "../../components/Footer/Footer"

function HomePage() {
  return (
    <div>
      <MainCarousel />
      <div className="py-10 space-y-10 flex flex-col justify-center px-5 lg:px-8">
        <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} SectionName={"Ladies Kurta"} />
        <HomeSectionCarousel data={mens_kurta} SectionName={"Shoes"} />
        <HomeSectionCarousel data={mens_kurta} SectionName={"Jeans"} />
        <HomeSectionCarousel data={mens_kurta} SectionName={"Langha"} />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
