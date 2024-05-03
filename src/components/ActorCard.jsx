import { baseImgUrl } from "../uitis/constans"



const ActorCard = ({actor}) => {

    const url = !actor.profile_path
? '/default-ppp.jpg'
: baseImgUrl + actor.profile_path;


  return (
    <div className="w-[160px] line-clamp-1">
        <img className="h-[175px] w-[120px] object-cover"   src={url} />
        <h2>{actor.original_name}</h2>
        <h2 className="line-clamp-1">{actor.character}</h2>
      
    </div>
  )
}

export default ActorCard
