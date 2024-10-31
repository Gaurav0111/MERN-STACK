import React, { useState } from "react";
import '../../assets/css/ToDoList.css';
import List from "./List";

const ToDoList = () => {
    const [inputList, setList] = useState('');
    const [Items, setItems] = useState([]);

    const itemEvents = (event) => {
        setList(event.target.value)
    }
    const listOfItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setList('')
    }

    const deleteItems = (id) => {
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className="main_div" >
                <div className="center_div" >
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Task"
                        value={inputList} onChange={itemEvents} />
                    <button onClick={listOfItem} > + </button>
                    <ol>

                        {Items.map((itemVal, index) => {
                            // return (<li>{itemVal}</li>);
                            return <List
                                key={index}
                                id={index}
                                onSelect={deleteItems}
                                text={itemVal} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    );

}

export default ToDoList;