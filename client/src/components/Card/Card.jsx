import style from './Card.module.css'
const Card = (props)=>{

    const {image,name,temperament, weight} = props
    const baseURL = "https://cdn2.thedogapi.com/images/"
    

    return(
        <div className={style.container_card}>
            <p>Nombre:  {name}</p>
            <p>Temperamento:  {temperament}</p>
            <p>Peso en KG:  {weight.metric}</p>
            <img className={style.img_dog} src={`${baseURL}${image}.jpg`}></img>
        </div>
    )
}

export default Card