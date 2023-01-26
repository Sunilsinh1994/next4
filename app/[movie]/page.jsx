import Movie from "../about/Movie"

export default async function MovieDetails({params}){
    const {movie} = params
  
    const imagePath= "https://image.tmdb.org/t/p/original"
    const data=await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=e20f37a20db2740e7f354ccf4bb4a6e3`)
    const res=await data.json()
    
    const suny= res.production_companies.map(i=>(
        <div className="object-fill w-20  py-3 mx-auto" key={i.id}><img src={imagePath + i.logo_path} alt={res.title} width={1000} height={1000} className="w-100% h-100% "/></div>
        
    ))
   
    return(
        <div className="bg-080b16 mt-10">
            <h1 className="text-cust5 text-center text-2xl my-5">{res.title}</h1>
            <div className="bg-cust2 p-5 text-cust5 text-base">
            <h2>Tagline: <span className="text-cust6 font-extralight bg-cust4 px-1">{res.tagline}</span></h2>
            <h5>Release date: <span className="text-cust6 font-extralight bg-cust4 px-1">{res.release_date}</span></h5>
            <h5>Runtime: <span className="text-cust6 font-extralight bg-cust4 px-1">{res.runtime} minuts</span></h5>
          
            </div>
            
            <h2 className="bg-cust5 inline-block my-5 p-2 rounded-sm text-cust1 font-semibold">{res.status}</h2>
            <img src={imagePath + res.backdrop_path} alt={res.title} width={5000} height={5000} className="my-5"/>
            <p className="bg-cust2 p-5 text-cust6 font-light leading-7">{res.overview}</p>
            <div className="bg-cust5 p-5 my-5 text-cust7">
            <h6>Popularity: {res.popularity}</h6>
            <h6>Rating: {res.vote_average}</h6>
            </div>
            <div className="flex gap-5 items-center px-10 bg-white my-5 ">
                {suny}
            </div>
                
          


           

          
        </div>
    )

}