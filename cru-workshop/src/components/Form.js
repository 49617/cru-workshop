import React,{ useState } from 'react'

function Form() {
    const [title, setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const addList =() => {
        const listData = {
            title:title,
            amount:amount,
        }
        props.addItem(listData)
    }
  return (
   <>
   <h3>{listData.title}</h3>
   <h3>{listData.amount}</h3>
   <form onSubmit={addList}>
   <div>
    <label>รายการ</label>
    <input type="text" name="list" onChange={(event) => setTitle(event.target.value)}/>
   </div>
   <div>
    <label>จำนวนเงิน</label>
    <input type="number" name="amount" onChange={(event) => setAmount(event.target.value)}/>
   </div>
   <div>
   <button type="submit" name="submit">
   
   </button>
   </div>
   </form>
   </>
  )
}

export default Form