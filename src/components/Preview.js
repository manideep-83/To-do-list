import React from 'react';

function statust(event,index) {
  let x = event.target;
  let xy=document.getElementById(`changes-${index}`);
  
  if (x.checked) 
  {
    // console.log("yes");
    xy.textContent="Completed";
    let xyz=document.getElementById(`check-${index}`);
    xyz.disabled=true;
  }
  else
  {
    xy.textContent="In Progress";
    // console.log("no");
  }
  };  
const HandleDeletion=(event,index)=>{
  let z=document.getElementById(`row-${index}`);
  if(z)
    { 
      z.remove();
    }
 
};
function rendertable(list)
{
    const pad={
      padding : '10px 10px'
    } ;
            return list.map((item, index) => (
              <tr key={index} id={`row-${index}`}>
                <td>
                  <div className='container'>
                  <div className="form-check form-switch">
                      <input className="form-check-input" disabled={false} type="checkbox" id={`check-${index}`} onChange={(event)=>
                        statust(event,index)}/>
                      </div>
                  </div>
                </td>
                <td style={pad}>{item}</td>
                <td style={pad} id={`changes-${index}`}>In Progress</td>
                <td style={pad}><button className='btn btn-danger' onClick={(event)=>HandleDeletion(event,index)}>Delete</button></td>
              </tr>
            ));
            

}
export default function Preview (props) {
    

  return (
    <>
    <div className='container my-5'>
        <h1>Preview Of Works To be Completed</h1>
        <div className='table-responsive-md'>
        <table className='table table-stripped my-4 fs-5 '>
          <thead className='table'> 
            <tr>
              <th>Progress</th>
            <th>Task To Be Completed</th>
            <th>Status</th>
            <th>Remove</th>
            </tr>
          </thead>
          <tbody>
          {rendertable(props.data)}
          </tbody>
          
        </table>
        </div>
    </div>
    </>
  )
}
