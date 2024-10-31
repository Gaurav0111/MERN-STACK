import React from "react";

const List = (props) => {

    return (<>
        <div className="todo_style" >
            <i className="fa fa-times " aria-hidden="true" onClick={props.deleteItems} text="h">x</i>
            <li> {props.text} </li>
        </div>
    </>);
}

export default List;