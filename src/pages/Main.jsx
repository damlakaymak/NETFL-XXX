import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getGenres, getPopular} from '../redux/actions';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import MovieList from '../components/MovieList';



const Main = () => {

  const {isLoading , genres , error} = useSelector((store) => store.genre);

  

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getPopular());
  dispatch(getGenres());
}, []);
        
    return (
    <div>
<Hero/>


{isLoading ? <Loader/> : error ? (
    <Error/>
  ): (

    genres.map((genre) => <MovieList genre={genre} key={genre.id}/>)
  )
}
    </div>
  )
}

export default Main
