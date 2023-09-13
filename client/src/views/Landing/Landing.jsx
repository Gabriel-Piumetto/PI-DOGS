import style from './Landing.module.css'
import { Link } from "react-router-dom"

const image='assets/dogs-img.jpg'


const Landing = ()=> {

    return (
        
        <div>
            <img alt='Dogs Henry' className={style.image} src={image}></img>


            <button className={style.button}><Link to="/home">ENTRAR</Link></button>
        
        </div>

    )
    
}

export default Landing