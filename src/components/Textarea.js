import React,{ useState } from 'react'
import Preview from './Preview';
export default function Textarea() {
        const [arr,SetList]=useState([]);
        const [ind, SetIndex]=useState(0);
        const Set_List=()=>{
            const text=document.getElementById('inputText').value;
            const newArr=[...arr];
            console.log(newArr)
            newArr[ind]=text;
            SetList(newArr);
            SetIndex(ind+1);
            document.getElementById('inputText').value = '';
        };
        
        console.log(arr)
        
        const size={
         height: `50px`,
          
        };
        const display={
          display :`flex`,
          padding :'10px'
        };
        const butt={
          width:`10%`,
          height:`50px`,
          marginleft:`3%`
        };
    return (
    <>

            <div className="container my-3">
               <h1>Welcome to To-do-list Remainder</h1> 
                <div className="mb-3 mt-5  row" >
                <div className='col-lg-9 col-md-9 col-sm-5'>
                <input type="text" className="form-control "style={size}  id="inputText"  placeholder='Enter the task'></input> 
                </div>
                  <button type="button" className="btn btn-outline-info  " style={butt} onClick={Set_List} ><strong>Add to list</strong></button>
               </div>
               
            <Preview data={arr} />
            </div>
</>
  )
}
