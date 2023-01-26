// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ['latin'] })
import Movie from "./about/Movie"




export default async function Home() {
  const data=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e20f37a20db2740e7f354ccf4bb4a6e3`)

  const res=await data.json()


  return (
    <main >
  
      <div className="grid gap-16 grid-cols-suny my-10">
      {res.results.map(movie=>(
        <Movie 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        date={movie.release_date}/>
      ))}
      </div>
     
    </main>
  )
}
