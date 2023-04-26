import { React, useEffect, useState } from "react";
import './Banner.css'
import instance from "./instance";
import requests from "./requests";



function Banner() {

  const base_url = "https://image.tmdb.org/t/p/original/"

  const [movies, setMovie] = useState({})

  const fetchData = async () => {
    const response = await instance.get(requests.fetchNetflixOriginals)
    setMovie(response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ]);
    console.log(movies);

  }
  function truncate(str,n){
   return str?.length>n?str.substr(0,n-1)+'...': str

     
  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <div className="banner" style={{
    backgroundImage:`url(${base_url}${movies.backdrop_path})`,
    backgroundSize:'cover'}}>

      <div className="bannerContent">
        <h1 className="title">
          {movies.name}
        </h1>
        <h3 className="overview">
          {truncate(movies?.overview,210)}
        </h3>
      </div>
      
    </div>
  )
}

export default Banner