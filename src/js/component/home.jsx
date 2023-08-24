import React, {useState} from "react";
import '../../styles/index.css'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { func } from "prop-types";

//create your first component
const Home = () => {
	const [toDoValue, setToDoValue] = useState("");
	const [listLi, setListLi] = useState(["Wash my hands"]);
	function addToDo(event){
		
		if (event.key == 'Enter'){
			setListLi([...listLi, event.target.value]);
			setToDoValue("");
		} 
		
	}
	function deletedItem(itemToDelete){
		setListLi(listLi => {return listLi.filter((element) => element !== itemToDelete)})
	}
	return (
		<section className="todolist">
		<h1> ToDos List</h1>
		<div className="list">	
						
			<ul>
				<input type="text" name="input-todo" className="input-todo" placeholder="What needs to be done?" onChange={(e) => setToDoValue(e.target.value)} onKeyDown={(e) => addToDo(e)} value={toDoValue}/>	
									
				{listLi.map((toDo, index) => {
					return <li key={index}><span>{toDo}</span> <i className="fa-solid fa-xmark" onClick={() => deletedItem(toDo) }></i></li>
				})}
				<li><span className="items-left"> {listLi.length <=1 ? listLi.length +" Items left" : listLi.length +" Items lefts"}</span></li>			
			</ul>
			
		</div>
		</section>
	);
};

export default Home;
