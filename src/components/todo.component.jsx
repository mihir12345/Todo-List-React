import React from 'react';
// import { Component } from 'react';


function Todo({items}) {
    
    return (
        <ul>
            {items.map((item,id)=>(<li key={id}>
               {item.text}
            </li>))}
        </ul>
    );
}

export default Todo;








/////////////////////////class
// class Todo extends Component {
//     render(){
//     return (
//         <ul>
//             {this.props.items.map((item,id)=>(<li key={id}>
//                {item.text}
//             </li>))}
//         </ul>
//     );}
// }

// export default Todo;