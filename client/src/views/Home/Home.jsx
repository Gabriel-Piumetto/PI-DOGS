import ConteinerCards from '../../components/ConteinerCards/ConteinerCards'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDogs, filterByDb, filterByApi, filterByTemperament } from "../../redux/actions"




const Home = () => {


    const dispatch = useDispatch()

    const [byApiOn, setByAPiOn] = useState(false)

    const [temperState, setTemperState] = useState('')

    const dogsGlobal = useSelector(state => state.dogs)



    useEffect(() => { dispatch(getDogs()) }, [byApiOn])

    
    
    
    
    //////////////////ORDENAMIENTOS

    const orderDogsByAlphAsc = () => {
        const ORDER_DOGS_BY_ALPH_ASC = "ORDER_DOGS_BY_ALPH_ASC"

        const dogs = [...dogsGlobal]


        const orderedDogs = dogs.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })


        dispatch({ type: ORDER_DOGS_BY_ALPH_ASC, payload: orderedDogs })
    }



 const orderDogsByAlphDes = () => {

    const ORDER_DOGS_BY_ALPH_DES = "ORDER_DOGS_BY_ALPH_DES"



    const dogs = [...dogsGlobal]

    const orderedDogs = dogs.sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()

        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
        return 0;
    })


    dispatch({ type: ORDER_DOGS_BY_ALPH_DES, payload: orderedDogs })

}
    
    


const orderByWeightAsc = () => {
    const ORDER_DOGS_BY_WEIGHT_ASC = "ORDER_DOGS_BY_WEIGHT_ASC";
     
    const dogs = [...dogsGlobal];
     
    const unificarMeter = dogs.map(item => {
      if (item.isCreated) {
        // Verificar si item.weight es una cadena o un objeto
        const weightParts = typeof item.weight === "string" ? item.weight.split(' - ') : null;
        if (weightParts) {
          const weightMetric = `${weightParts[0]} - ${weightParts[1]}`;
          item.weight = {
            imperial: item.weight,
            metric: weightMetric
          };
        }
      }
      return item;
    });
  
    const promedioDogs = unificarMeter.map((dog) => {
      if (typeof dog.weight.metric === "string") {
        const metricNumeros = dog.weight.metric.split(" - ");
        const numero1 = parseInt(metricNumeros[0]);
        const numero2 = parseInt(metricNumeros[1]);
        const promedio = (numero1 + numero2) / 2;
        return {
          ...dog,
          weight: {
            metric: promedio,
          },
        };
      } else {
        return dog;
      }
    });
  
    const dogsOrdenados = [...promedioDogs].sort((a, b) => a.weight.metric - b.weight.metric);
     
    dispatch({ type: ORDER_DOGS_BY_WEIGHT_ASC, payload: dogsOrdenados });
  };
  






  const orderByWeightDes = () => {
    const ORDER_DOGS_BY_WEIGHT_ASC = "ORDER_DOGS_BY_WEIGHT_ASC";
     
    const dogs = [...dogsGlobal];
     
    const unificarMeter = dogs.map(item => {
      if (item.isCreated) {
        // Verificar si item.weight es una cadena o un objeto
        const weightParts = typeof item.weight === "string" ? item.weight.split(' - ') : null;
        if (weightParts) {
          const weightMetric = `${weightParts[0]} - ${weightParts[1]}`;
          item.weight = {
            imperial: item.weight,
            metric: weightMetric
          };
        }
      }
      return item;
    });
  
    const promedioDogs = unificarMeter.map((dog) => {
      if (typeof dog.weight.metric === "string") {
        const metricNumeros = dog.weight.metric.split(" - ");
        const numero1 = parseInt(metricNumeros[0]);
        const numero2 = parseInt(metricNumeros[1]);
        const promedio = (numero1 + numero2) / 2;
        return {
          ...dog,
          weight: {
            metric: promedio,
          },
        };
      } else {
        return dog;
      }
    });
  
    const dogsOrdenados = [...promedioDogs].sort((a, b) => b.weight.metric - a.weight.metric);
     
    dispatch({ type: ORDER_DOGS_BY_WEIGHT_ASC, payload: dogsOrdenados });
  };
      
    
    
    
    
    
    

    
    
    const handlerFilterDb = () => {
        dispatch(filterByDb())

    }
    const handlerFilterApi = () => {

        dispatch(filterByApi())


        setByAPiOn(true)



    }
    const handlerFilterAll = () => {
        dispatch(getDogs())

    }

    const handlerInputTemp = (event) => {

        setTemperState(event.target.value)
    }

    const handlerFilterByTemperament = () => {

        const temperament = temperState.toLowerCase()
        dispatch(filterByTemperament(temperament))

    }

    const handlerOrderByAlphAsc = () => {
        orderDogsByAlphAsc()
    }

    const handlerOrderByAlphDes = () => {
        orderDogsByAlphDes()
    }

    const handlerOrderWeightAsc = () => {

        orderByWeightAsc()

        

    }

    const handlerOrderWeightDes = () => {

        orderByWeightDes()

    }

    


return(
    <div>
        <h1>HENRY DOGS!</h1>
        <button onClick={handlerFilterDb}>DB</button>
        <button onClick={handlerFilterApi}>API</button>
        <button onClick={handlerFilterAll}>TODOS</button>
        <div>

            <label Filtrar por temperamento ></label>
            <input value={temperState} type="text" onChange={handlerInputTemp} /><button onClick={handlerFilterByTemperament}>FILTRAR POR TEMPERAMENTO</button>

        </div>

        <button onClick={handlerOrderByAlphAsc}>A-Z</button>
        <button onClick={handlerOrderByAlphDes}>Z-A</button>
        <button onClick={handlerOrderWeightAsc}>Ord. por menor peso</button>
        <button onClick={handlerOrderWeightDes}>Ord. por mayor peso</button>
        <ConteinerCards />

    </div>
    )


}
export default Home