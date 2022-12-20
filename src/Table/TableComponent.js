import React, { useEffect, useState } from 'react';
import InputFields from '../InputFields/InputFields';
import './TableComponent.css'
const TableComponent=()=>{
    const [totalRows, setTotalRows] = useState([{credit:'',debit:''},{credit:'',debit:''},{credit:'',debit:''}])
    const [totalCredit, setTotalCredit] = useState(0)
    const [totalDebit, setTotalDebit] = useState(0)

    useEffect(()=>{
        let totalCredit=0
        let totalDebit=0
        totalRows.map(item=>{
            totalCredit= Number(item.credit)+ totalCredit
            totalDebit= Number(item.debit) + totalDebit
        })
        setTotalCredit(totalCredit)
        setTotalDebit(totalDebit)
    },[totalRows])

    const DeleteHandler=(i)=>{
        console.log(i)
        const arr= [...totalRows]
        arr.splice(i, 1)
        setTotalRows(arr)
    }
    const AddRowHandler=()=>{
        const arr= [...totalRows]
        arr.push({credit:'',debit:''})
        setTotalRows(arr)
    }
    const CreditAmountHandler=(i, e)=>{
        const arr=[...totalRows]
        arr[i].credit= e.target.value
        setTotalRows(arr)
    }
    const DebitAmountHandler=(i,e)=>{
        const arr=[...totalRows]
        arr[i].debit= e.target.value
        setTotalRows(arr)
    }
    return(
        <div className="form-group content">
        <div className='row'>
            <div className='col-4'>
            <p>Accounts</p>
            </div>
            <div className='col-3'>
            Debit Amount
            </div>
            <div className='col-3'>
            Credit Amount
            </div>
        </div>
        {totalRows.map((item,index)=>{
            return  <InputFields key={index} values={totalRows[index]} index={index} deleteRow={()=>DeleteHandler(index)} 
            creditAmount={CreditAmountHandler} debitAmount={DebitAmountHandler}/>
        })}
       
        <div className='row'>
            <div className='col-2'>
                <p className="addrow" style={{color:'blue'}} onClick={AddRowHandler}>+ Add Row</p>
           
            </div>
            <div className='col-2'>
            Total
            </div>
            <div className='col-3'>
            {totalDebit}
            </div>
            <div className='col-3'>
            {totalCredit}
            </div>
        </div>
    </div>
    )
}

export default TableComponent