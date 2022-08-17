import "./App.css";
import messageContext from './App'
import useContext from 'react';
import {useNavigate} from  'react-router-dom'
export default function Staredmessagediv(props) {
const navigate=useNavigate();
  return (<><div className="staredmessagepage">STARED MESSAGES</div><div style={{border:"2px solid black",width:"75%",height:"75%",marginLeft:"100px",padding:"20px"}}>  
  <button className="closeButton" onClick={()=>{navigate("/")}}>x</button><div id="staredmessagediv">
      {(props.val).map((element) => {
          if(element.starlabel)
          return <div style={{margin:"2px"}}>{element.messagedata}<span>{element.time}</span></div>;
      })}
    </div>
    </div></>);
}
