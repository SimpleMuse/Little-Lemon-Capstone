import MarioAndAdrian from '../assets/img/MarioAndAdrian.jpg';

const HomePageFeature = () => {

  return (
    <div className="home-page-feature">
      <div className="content-container">
        <div className="home-page-feature-wrapper">
          <div className="flex-column-left">
            <img src={MarioAndAdrian} alt="Two chefs smiling as they plan the evening's menu." />
          </div>
          <div className="flex-column-right">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>A family owned restaurant serving your favorite Mediterranean dishes with a twist.</p>
            <button className="little-lemon-btn">Reserve a Table</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageFeature;