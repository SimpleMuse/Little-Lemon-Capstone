import features from '../assets/data/featured.json';
import FeaturedItemCard from './FeaturedItemCard';

const FeaturedItemCards = () => {

  return (
    <div className="featured-card-wrapper">
      {
        features.map((feature, index) => 
          <FeaturedItemCard
            key={index}
            imgPath={feature.imgPath}
            imgAltText={feature.imgAltText}
            header={feature.header}
            amt={feature.amt}
            description={feature.description}
          />
        )
      }
    </div>
  )
}

export default FeaturedItemCards;