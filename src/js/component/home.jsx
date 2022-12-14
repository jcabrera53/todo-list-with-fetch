import React,{useState, useEffect} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

useEffect (async()=>{
	let resp = await fetch("https://assets.breatheco.de/apis/fake/todos/user/jcabrera53")
	console.log(resp);
	let todo = await resp.json()
	setListaTareas(todo);
},[])

const [texto, setTexto] = useState("") 

async function handle(event){
	if(event.key == "Enter")
	{
		let respuesta = await fetch("https://assets.breatheco.de/apis/fake/todos/user/jcabrera53",{
			method: 'PUT',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify([...ListaTareas,{label: texto, done: false}])
		  })
		  let data = await respuesta.json()
		  setListaTareas([...ListaTareas,{label: texto, done: false}])
		  setTexto("")
	}
}

async function deleteTask(index){
	
		let respuesta = await fetch("https://assets.breatheco.de/apis/fake/todos/user/jcabrera53",{
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(ListaTareas.filter((task,indice)=>index!=indice))
		})
		let data = await respuesta.json()
		  setListaTareas(ListaTareas.filter((task,indice)=>index!=indice))
		  setTexto("")
}



const [ListaTareas, setListaTareas] = useState([])
	return (
		<div className="text-center bg-light">
			<div className="text-center">TO DO LIST WITH FETCH</div>
			<div className="input-group input-group-lg">
  <span className="input-group-text" id="inputGroup-sizing-lg">Ingrese texto:</span>
  <input type="text" onKeyDown={handle} onChange={(event)=>setTexto(event.target.value)} value={texto} className="form-control"  />
</div>

  {ListaTareas.map((task,index) => 
	<div  className="border d-flex justify-content-between" key={index}>
  <label className="ms-3 mt-2 mb-2">{task.label}</label>
  <label className="me-3 mt-2 mb-2" onClick={()=>deleteTask(index)}>X</label>
  </div>
)}
		</div>
	);
};

export default Home;
