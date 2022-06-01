/* eslint-disable no-unused-vars */
import {    SyntheticEvent, useState  } from 'react';
import { Form } from '../components/form/form';
import { Form1 } from '../components/form1/form1';
import { Form2 } from '../components/form2/form2';
import { Form3 } from '../components/form3/form3';
import { Form4 } from '../components/form4/form4';


export function HomePage(){


    const [form, setForm] = useState(0);

      function changeVisibility1(value: number)  {
        console.log(value);
        setForm(value);

       
    };

    const handlerButton = (ev: SyntheticEvent) => {
        ev.preventDefault();
        console.log(ev.currentTarget.id);
        changeVisibility1(+ev.currentTarget.id)
    }
    

    if(form === 1){
        return <>
            
            <Form1 />
            <button id="0" onClick={handlerButton}>Atrás</button>
            <button id="2" onClick={handlerButton}>Siguiente</button>
        </>
    } else if(form === 2){
            return (
                <>
                    <Form2 />
                    <button id="1" onClick={handlerButton}>Atrás</button>
                    <button id="3" onClick={handlerButton}>Siguiente</button>
                </>
            )
    } else if(form === 3){
        return (
            <>
                <Form3 />
                <button id="2" onClick={handlerButton}>Atrás</button>
                <button id="4" onClick={handlerButton}>Siguiente</button>
            </>
        )
    } else if(form === 4){
        return (
            <>
                <Form4 />
                <button id="3" onClick={handlerButton}>Atrás</button>
            </>
        )
    }else {
        return (
        
            <main>
                <h1>Challenge formulario</h1>
    
                <Form 
                    changeVisibility1={changeVisibility1}
                ></Form>
                <button id="1" onClick={handlerButton}>Siguiente</button>
            </main>
            
        )
    }

  
}