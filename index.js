// import statement
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
// declaring router
const router = new Navigo(window.location.origin);
//3. render function
function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
  addEventListener();
}
//4. event handler function
function addEventListener() {
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

// document.querySelector(".fa-bars").addEventListener("click", () =>{
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });
router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";
    if (page === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
        )
        .then(response => {
          state.Home.weather = {};
          state.Home.weather.city = response.data.name;
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => console.log(err));
    }
  }
});
router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
