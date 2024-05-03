
import { useSelector } from 'react-redux'
import Loader from './Loader'
import { baseImgUrl } from '../uitis/constans'
import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
 const {isLoading, error,movies}= useSelector((store) => store.movie)
 const i =Math.floor (Math.random() * 20)
const movie = movies[i];
console.log(movie)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-10'>
     {isLoading || !movie ? (<Loader/>):error ? (<Error/>):(

      <>
      <div className='flex flex-col gap-6 items-center justify-center'>
<h1 className='text-3xl font-bold'>{movie.title}</h1>
<p  className='text-start'>{movie.overview}</p>
 <p>
  <span>

    IMDB:   
    </span>
 
    <span className='text-yellow-400 ms-2 font-semibold text-lg'>
    {
   movie.vote_average.toFixed(1)
}
    </span>
    </p>  

    <div className='flex gap-5'>
      <Link to={`/movie/${movie.id}`} className='p-2 bg-red-600 rounded hover:bg-red-700 '>Filmi İzle</Link>
      <button className='p-2 bg-blue-600 rounnded hover:bg-blue-700' >Listeye Ekle</button>
      </div>   
     </div>
      <div className='flex justify-center banner'>

<img className='my-4 object-contain rounded max-h-[300px]' src={baseImgUrl + movie.backdrop_path}  alt=''/>
      </div>
      
      
      
      </>
     )}
    </div>
  )
}

export default React.memo(Hero);
