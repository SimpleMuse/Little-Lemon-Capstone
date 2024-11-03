import HomePageFeature from "./HomePageFeature";
import FeaturedItemCard from "./FeaturedItemCard";

import FeatureImg1 from '../assets/img/greek salad.jpg';
import FeatureImg2 from '../assets/img/bruchetta.svg';
import FeatureImg3 from '../assets/img/lemon dessert.jpg';

const Main = () => {
  return (
    <main>
      <div className="section-top">&nbsp;</div>
      <HomePageFeature />
      <div className='content-container'>
        <h2 className='weekly-special-header'>Weekly Specials! <button className="little-lemon-btn float-end">Online Menu</button></h2>
        <div className="featured-card-wrapper">
          <FeaturedItemCard 
            imgPath={FeatureImg1} 
            imgAltText={'An image of a fresh greek salad.'} 
            header={'Greek Salad'} 
            amt={'$19.50'} 
            description={'Our famous greek salad, a fresh mix of lettuce, peppers, olives and feta cheese, tossed in a zesty dressing, and topped with crunchy croutons.'} 
          />
          <FeaturedItemCard 
            imgPath={FeatureImg2} 
            imgAltText={'An image of bruchetta.'} 
            header={'Bruchetta'} 
            amt={'$11.99'} 
            description={'Start your meal off with our best appetizer, toasted bread fresh daily from a local bakery, with a cubed tomato topping drizzled with olive oil and balsamic vinegar.'} 
          />
          <FeaturedItemCard 
            imgPath={FeatureImg3} 
            imgAltText={'A delicious layered lemon cake.'} 
            header={'Lemon Layer Cake'} 
            amt={'$7.99'} 
            description={'Light and moist lemon cake layered with lemon curd makes this a favorite and refreshing dessert choice.'} 
          />
        </div>
      </div>
    </main>
  )
}

export default Main;