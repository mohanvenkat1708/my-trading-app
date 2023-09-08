import ReactDom from 'react-dom';
import React from 'react';
const list=[1,2,3,4,5];
const listItems=list.map((a)=>(<li key={a}>{a*2}</li>));
const NumberList=()=>{
    return <ul>
        {listItems}
    </ul>
}

export default NumberList;