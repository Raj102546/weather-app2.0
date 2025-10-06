import { forecast } from "./modules/call.js";
import "../styles/main.css";

const searchBar = document.querySelector("#search-bar");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", ()=>{
    forecast(searchBar.value);
})