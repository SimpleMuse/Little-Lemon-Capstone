import MarioAndAdrian from '../assets/img/MarioAndAdrian.jpg';

const HomePageFeature = () => {

  return (
    <div class="home-page-feature">
      <div class="content-container">
        <div class="home-page-feature-wrapper">
          <div class="flex-column-left">
            <img src={MarioAndAdrian} />
          </div>
          <div class="flex-column-right">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>A family owned restaurant serving your favorite Mediterranean dishes with a twist.</p>
            <button class="little-lemon-btn">Reserve a Table</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageFeature;