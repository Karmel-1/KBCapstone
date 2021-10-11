import html from "html-literal";
import kissexample from "../../assets/photos/kissexample.JPG";
export default st => html`

Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F
<section id="homeinfo">
<p> A lot of Music therapy is used to aid in discomfort by improving:
<ul>
  <li> respiration </li>
  <li> reduced heart rate </li>
  <li> relaxed muscle tension </li>
</ul>
</p>
<p>
 And for mental health, this kind of therapy is great for reducing stress' common negative side effects, such as emotional and behavioral problems </p>
 <h1>HEALING MUSIC </h1>
 <iframe width="300" height="200" src="https://www.youtube.com/embed/-io-uld2JFU?start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<DIV>
<p>For more info<a href="https://youtube/Faij8f7YRaI">CLICK HERE </a></p>
</DIV>

<h2>MUSIC FOR ENTERTAINMENT </h2>

<div>
<img class="center image" src="${kissexample}">
</div>

<DIV>
<p>For more info<a href=https://www.youtube.com/watch?v=VfBws7GEck0>CLICK HERE </a></p>
</DIV>

<ul>
<li>Anime</li>
<li>Blues</li>
<li>Alternative</li>
<li>Children’s Music</li>
<li>Country</li>
<li>Dance </li>
<li>Hip-Hop/Rap</li>
<li>Fitness & Workout</li>
<li>Holiday</li>
</ul>`;

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
