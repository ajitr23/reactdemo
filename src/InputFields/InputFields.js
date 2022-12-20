import React from 'react'

const InputFields=({index, values, deleteRow,debitAmount,creditAmount, ...props})=>{
return(
    <>
    <div className='row'>
        <div className='col-4'>
        <select style={{width:'70%',margin:'10px'}}>
            <option value="" selected>Select Accounts</option>
            <option value="Tom">John</option>
            <option value="John">Sunny</option>
            <option value="Tom">Tom</option>
        </select>
        </div>

        <div className='col-3'>
       <input inputmode="numeric" pattern="[0-9]*" style={{width:'80%', margin:'10px'}} type='number' value={values.debit} onChange={(e)=>debitAmount(index, e)}/>
        </div>

        <div className='col-3'>
        <input inputmode="numeric" pattern="[0-9]*" style={{width:'80%', margin:'10px'}} type='number' value={values.credit} onChange={(e)=>creditAmount(index,e)}/>
        </div>
        <div className='col-1' style={{marginTop:'10px'}}>
        <svg  onClick={deleteRow} xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="bi bi-trash" viewBox="0 0 16 16">
         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        </div>
    </div>
    </>
    )
}
export default InputFields