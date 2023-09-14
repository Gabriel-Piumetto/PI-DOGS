import ConteinerCards from "../../components/ConteinerCards/ConteinerCards"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getDogs, filterByDb,filterByApi } from "../../redux/actions"

const Home = ()=>{

    
    const dispatch = useDispatch()

    const [byApiOn, setByAPiOn] = useState(false)





    useEffect(()=>{ dispatch(getDogs())},[byApiOn])

    const handlerFilterDb=()=>{
     dispatch( filterByDb())   

    }
    const handlerFilterApi=()=>{
        
        dispatch( filterByApi() )
        

        setByAPiOn(true)

        

    }
    const handlerFilterAll=()=>{
        dispatch(getDogs())

    }

    return (    
        <div>
            <h1>HENRY DOGS!</h1>
            <button onClick={handlerFilterDb}>DB</button>
            <button onClick={handlerFilterApi}>API</button>
            <button onClick={handlerFilterAll}>TODOS</button>
            <ConteinerCards/>

        </div>
    )
}

export default Home