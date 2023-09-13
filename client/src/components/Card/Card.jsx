import style from './Card.module.css'
import { useHistory } from 'react-router-dom'
const Card = (props)=>{

    const {image,name,temperament, weight} = props
    const baseURL = "https://cdn2.thedogapi.com/images/"
    const history = useHistory()
    
 const handlerDetail = ()=>{

    history.push(`/detail-dog/${props.id}`)
 }

    return(
        <div className={style.container_card} onClick={handlerDetail}>
            <p>Nombre:  {name}</p>
            <p>Temperamento:  {`**${temperament}**`}</p>
            <p>Peso en KG:  {weight.metric===undefined?weight:weight.metric}</p>
            <img className={style.img_dog} src={`${baseURL}${image}.jpg`}></img>
        </div>
    )
}

export default Card