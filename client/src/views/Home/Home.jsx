import ConteinerCards from "../../components/ConteinerCards/ConteinerCards"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getDogs, filterByDb,filterByApi, filterByTemperament } from "../../redux/actions"

const Home = ()=>{

    
    const dispatch = useDispatch()

    const [byApiOn, setByAPiOn] = useState(false)

    const [temperState, setTemperState] = useState('')



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

    const handlerInputTemp=(event)=>{
        
        setTemperState(event.target.value)
    }

     const handlerFilterByTemperament = ()=>{

        const temperament = temperState
        dispatch(filterByTemperament(temperament))

     }

    return (    
        <div>
            <h1>HENRY DOGS!</h1>
            <button onClick={handlerFilterDb}>DB</button>
            <button onClick={handlerFilterApi}>API</button>
            <button onClick={handlerFilterAll}>TODOS</button>
            
            <label Filtrar por temperamento ></label>
            <input value={temperState} type="text" onChange={handlerInputTemp} /><button onClick={handlerFilterByTemperament}>FILTRAR POR TEMPERAMENTO</button>
            <ConteinerCards/>

        </div>
    )
}

export default Home