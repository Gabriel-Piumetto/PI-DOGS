import style from './Form.module.css'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTemperaments } from "../../redux/actions"
import axios from 'axios'


const Form = () => {

    const dispatch = useDispatch()

    useEffect(() => { dispatch(getTemperaments()) }, [dispatch])

    const temperaments = useSelector(state => state.temperaments)

    

    const [formState, setFormState] = useState({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span: "",
        temperament:[]

    })

    const [errors, setErrors] = useState({
        name: "",
        height:"",
        weight: "",
        life_span: ""

    })


    const submitHandler = (event) => {

        event.preventDefault()
        if(formState.name===""){alert('EL CAMPO NOMBRE NO PUEDE ESTAR EN BLANCO');return}
        if(errors.name==="El nombre no debe contener números" ){alert('EL NOMBRE NO PUEDE CONTENER NÚMEROS');return}
        if(formState.temperament.length===0){alert('DEBE SELECCIONAR AL MENOS 1 TEMPERAMENTO');return}
        if(formState.min_height>formState.max_height){alert('LA ALTURA MÁXIMA NO PUEDE SER MENOR QUE LA MÍNIMA');return}
        if(formState.min_weight>formState.max_weight){alert('EL PESO MÁXIMO NO PUEDE SER MENOR QUE EL MÍNIMO');return} 
        
        return axios.post('http://localhost:3001/dogs/createDog/', formState).then(
            response => alert(response.data)).catch(error => alert(error.message))

    }

    const changeHandler = async (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({ ...formState, [property]: value });
        setFormState({ ...formState, [property]: value });

    }



    const validate = (formState) => {

        const regex = /\d/;

        if (regex.test(formState.name)) {
            setErrors({ name: "El nombre no debe contener números" })
        } else {
            setErrors({ name: "" })
        }
        if (formState.name === "") {
            setErrors({ name: "El campo nombre no puede estar vacío" })
        }
        if(formState.min_height>formState.max_height){
            setErrors({height: "La altura máxima no puede ser menor que la mínima" })}
        if(formState.min_weight>formState.max_weight){
        setErrors({weight: "El peso máximo no puede ser menor que el mínimo" })}    
    }

    const handlerCheckboxes = (event) => {
        const temperamentValue = event.target.value;
      
        
        if (formState.temperament.includes(temperamentValue)) {
                   setFormState({
            ...formState,
            temperament: formState.temperament.filter((temp) => temp !== temperamentValue)
          })
        } else {
          
          setFormState({
            ...formState,
            temperament: [...formState.temperament, temperamentValue]
          })
        }
      }



    return (
        <div className={style.mainContainer}>
            <form onSubmit={submitHandler}>

                <div>
                    <label>Nombre: </label>
                    <input type="text" name="name" onChange={changeHandler} value={formState.name}></input>
                    {errors.name ? <span>{errors.name}</span> : null}

                </div>



                <div>

                    <div>
                        <label>Altura mínima: </label>
                        <input type="text" name="min_height" onChange={changeHandler} value={formState.height}></input>
                    {errors.height ? <span>{errors.height}</span> : null}
                    </div>

                    <div>
                        <label>Altura máxima: </label>
                        <input type="text" name="max_height" onChange={changeHandler} value={formState.height}></input>
                    </div>

                </div>

                <div>

                    <div>
                        <label>Peso mínimo: </label>
                        <input type="text" name="min_weight" onChange={changeHandler} value={formState.min_weight}></input>
                        {errors.weight? <span>{errors.weight}</span> : null}
                    </div>

                    <div>
                        <label>Peso máximo: </label>
                        <input type="text" name="max_weight" onChange={changeHandler} value={formState.max_weight}></input>
                    </div>


                </div>



                <div>
                    <label>Años de vida: </label>
                    <input type="text" name="life_span" onChange={changeHandler} value={formState.life_span}></input>
                </div>

                <div className={style.containerChecks} >
                    <h3>Selecciona temperamento</h3>
                    {temperaments &&
                        temperaments.map((temper, index) => (
                            <label key={index}>
                                <input type="checkbox" name={temper} value={temper} 
                                 onChange={handlerCheckboxes}
                                />
                                  {temper} 


                            </label>
                        ))}
                </div>


                <button type="submit">SUBMIT</button>

            </form>
        </div>
    )

                        
}
export default Form