import React, { useEffect, useState } from "react"
import Movie from "./Movie"

export const Dashboard = () =>{
  const [popular, setPopular] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB }&language=en-US&page=1`

  useEffect(() => {
    const fetchPopular = async () => {
      const data = await fetch(url)
      const movies = await data.json()
      setPopular(movies.results)
      setIsLoading(false)
    }
    fetchPopular()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <h2>Dashboard</h2>

      { popular.map(movie => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  )
}