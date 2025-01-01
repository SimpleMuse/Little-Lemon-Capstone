
const FeaturedItemCard = ({imgPath, imgAltText, header, amt, description}) => {
  return (
    <div className="featured-item-card">
      <div className="featured-item-card-img">
        <img src={imgPath} alt={imgAltText} />
      </div>
      <div className="featured-item-header">
        <h3>{ header } <span className="float-end">{ amt }</span></h3>
      </div>
      <div className="featured-item-description">
        { description }
      </div>
    </div>
  )
}

export default FeaturedItemCard;