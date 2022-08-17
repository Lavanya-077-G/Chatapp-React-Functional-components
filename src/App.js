import React, { useState,useRef,useReducer } from 'react';
import './App.css';
import Messagecontainer from './messagecontainer';
import Staredmessagediv from './staredmessagearray';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// import { selectedmessagearr } from './messagebody';
export const messageContext = React.createContext(null);
function App() {
const navigate = useNavigate();
  const[messagearr,setmessagearr]=useState([]);
  const[count,setcount]=useState(1);
  // const [staredmessagearr,setstaredmessagearr]=useState([])
  const[inputMessage,setinputMessage]=useState("");
  const [persons,setpersons] = useState({
    person1: {
    name:'Lavanya Govindaraj',
    id:"person1",
  },
  person2:{
    name:"Usha kv",
    id:"person2",
   
  },person3:{
    name:"Nandhini",
    id:"person3",
   
  },person4:
  {name:"Guru",
  id:"person4",
 }})
 const Changevalue = (e) => {
    let today = new Date(),
 curTime = today.getHours() + ':' + today.getMinutes();
 console.log(curTime)
    setmessagearr([...messagearr,{messagedata:inputMessage,sendername:e.currentTarget.parentNode.parentNode.id,messageId:count,time:curTime,highlighted:false,starlabel:false}])
    setcount(count+1)
    setinputMessage("");
    e.target.value="";
    
}
const starmessage=(e)=>{
 const update= messagearr.map((item)=>{
     if (e.target.parentNode.id==item.messageId){
       e.target.parentNode.className="higilightdiv"
      return {...item,highlighted:true}
     }
     else
     {
         return item;
     }
   })  
  
  setmessagearr(update)
}
const starclick=()=>{
 const starmessage=messagearr.map((item)=>{
   if(item.highlighted){
     return {...item,starlabel:true}
   }
   else{
     return item;
   }
 })
 setmessagearr(starmessage)
}
const[dropdown,setdropdown]=useState(false);

const opendropdown=()=>{
  setdropdown(true)
}
// let selectedmessagearr=[];
const displaystaredmessage=()=>{
  navigate("/staredmessage")
  setdropdown(false)
}
const openList = () => {
  return (
    <ul style={{ listStyle: 'none', border: '1px solid #000' }}>
       <option onClick={()=>{displaystaredmessage()}}>StaredMessage </option>
    </ul>
  );
}
// const intialstate="StaredMessage";
const Changeinput = (e) => {
  setinputMessage(e.target.value)}

  
    return (
    <Routes>
      <Route index element={<messageContext.Provider value={{persons,setpersons,messagearr,setmessagearr,count,setcount,Changevalue,Changeinput,starclick,starmessage,opendropdown,dropdown,openList}}>   <div className='user'><Messagecontainer {...persons.person1}/>
      <Messagecontainer {...persons.person2} />
      <Messagecontainer {...persons.person3}/> 
      <Messagecontainer {...persons.person4}/></div></messageContext.Provider>} />
      <Route path="/staredmessage" element={<Staredmessagediv val={messagearr}/>}/>
     </Routes>);   
  }
export default App;