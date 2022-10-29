import React,{useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [ListaTareas, setListaTareas] = useState(["Walk the dog","Wash my hands","Make the bed","Learn React for the rest of my life"])
	return (
		<div className="text-center bg-light">
			<div className="text-center">TODOS</div>
			<div className="input-group input-group-lg">
  <span className="input-group-text" id="inputGroup-sizing-lg">Ingrese texto:</span>
  <input type="text" className="form-control"  />
</div>

  {ListaTareas.map(task => 
	<div  className="border">
  <label>{task}</label>
  </div>
)}

		</div>
	);
};

export default Home;
