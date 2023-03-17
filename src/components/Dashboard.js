import React, { useEffect, useState } from "react"
import Movie from "./Movie"

export const Dashboard = () =>{
const [popular, setPopular] = useState([])
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=de78fe9d134957087dfa9061907e0834&language=en-US&page=1`

  useEffect(() => {
    fetchPopular()
  },[])

  const fetchPopular = async () => {
    const data = await fetch(url)
    const movies = await data.json()
    setPopular(movies.results)
  }

  return (
    <div>
      <h2>Dashboard</h2>

      { popular && popular.map(movie => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  )
}