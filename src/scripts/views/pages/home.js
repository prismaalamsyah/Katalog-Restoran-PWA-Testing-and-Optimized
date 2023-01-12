import restoDbSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
      <h2 class="list__restaurant">List Restaurant</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await restoDbSource.getDataRestaurant();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
