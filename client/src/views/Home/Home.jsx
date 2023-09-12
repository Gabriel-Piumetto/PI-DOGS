import ConteinerCards from "../../components/ConteinerCards/ConteinerCards"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getDogs } from "../../redux/actions"

const Home = ()=>{

    
    const dispatch = useDispatch()


    useEffect(()=>{ dispatch(getDogs())},[dispatch])


    return (    
        <div>
            <h1>HENRY DOGS!</h1>
            <ConteinerCards/>

        </div>
    )
}

export default Home