import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
import Searchbar from '../Searchbar/Searchbar'

const Navbar = ()=>{
    return(
        <div className={style.MainConteiner}>
            <Searchbar></Searchbar>
            <Link to="/home" className={style.LinkHome}>HOME</Link>
            <Link to="/create-dog"className={style.LinkForm}>AGREGAR PERRO</Link>
        </div>
    )
}

export default Navbar