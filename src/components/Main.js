import HomePageFeature from "./FeaturedItems/HomePageFeature";
import FeaturedItemCards from "./FeaturedItems/FeaturedItemCards";

const Main = () => {
  return (
    <main>
      <div className="section-top">&nbsp;</div>
      <HomePageFeature />
      <div className='content-container'>
        <h2 className='weekly-special-header'>Weekly Specials! <button className="little-lemon-btn float-end">Online Menu</button></h2>
        <FeaturedItemCards />
      </div>
    </main>
  )
}

export default Main;