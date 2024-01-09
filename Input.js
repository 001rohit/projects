import React,{useState,useEffect} from 'react'
import Input1 from './Input1'
const Input = () => {
  const [input, setInput] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  console.log(title,desc);
  console.log(input);
  const submitHandler = (e) =>{
    e.preventDefault();
    
    setInput([...input,{
      title,desc,
      date
    }])
  };
  const  date = new Date();
    const deleteTask = (index)=>{
      const delete1 = input.filter((val,i)=>{
        return i !== index;
      });
      setInput(delete1);    
          console.log(delete1);
    }
   
  return (
    <div>
      <form onSubmit={submitHandler}>
      <input type="text" placeholder='Title'  onChange={(e)=>setTitle(e.target.value)}/>
      <input type="text" placeholder='Description' onChange={(e)=>setDesc(e.target.value)}/>
      <button className='Btn' type="submit" >Add Task</button>
      </form>
      <div>
       {input.map((item,index)=>(<Input1  key={index} index={index} date ={item.date} title={item.title} desc={item.desc} delete1= {deleteTask}/>))}
      </div>
    </div>
  )
}

export default Input
