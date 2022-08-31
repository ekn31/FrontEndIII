import React from 'react'
import Item from './Item'
import data from './data.json'
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

const data2 = data;
export default function Listado(props) {
  return (
    <div className='container'>
      {
         data2.map( data3 => {

        return(     
          <Item   
           name = {data3.producto.nombre} 
           desc={data3.producto.descripcion}
           stock={data3.stock}
           Reduct={props.Reduct}
           > 
           </Item>
        )
     })
      }
    </div>
  )
}
