import { Caladea } from "@next/font/google"
import Link from "next/link"

export default function Movie({title, poster, date, id}){
    const imagePath= "https://image.tmdb.org/t/p/original"
    console.log(poster)
return (
    <div>
    <h1>{title}</h1>
    <h2>{date}</h2>
    <Link href={`/${id}`}>
    <img src={imagePath + poster} width={800} height={800} alt={title}/>
    </Link>

    </div>
)
}