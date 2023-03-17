import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetch(url)
      const movies = await data.json()
      setMovie(movies)
      setIsLoading(false)
    }
    fetchMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(isLoading) return <h1>Loading...</h1>

  return (
    <>
      <h1>{movie.title}</h1>

      <div>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.path} />
      </div>
      <div>
        <p>
          <strong>Título: </strong>
          {movie.original_title}
        </p>
        <p>
          <strong>Genero: </strong>
          {movie?.genres?.map(genre => <li key={genre.name}>{genre.name}</li>)}
        </p>
        <p>
          <strong>Año de publicación: </strong>
          {new Date(movie.release_date).getFullYear()}
        </p>
      </div>
    </>
  )
}