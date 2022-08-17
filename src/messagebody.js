import {useContext,useState} from 'react';
import { messageContext } from './App';
import './App.css';
import {AiFillStar} from  "react-icons/ai";


export default function Messagebody(props) {
const messagearray=useContext(messageContext);
 
    // console.log(props)
  const name=props.name;
const {messagearr,starclick,setmessagearr,starmessage}=messagearray;

  return (
    <div className="message-container" id="messagecontainer">
      {messagearr.map((item) => {
        //  console.log(item.sendername)
        if (item.messagedata) {
          if ( name===item.sendername ) {
            return (
              <div id={item.messageId} className={"sendermessagediv"}  onClick={starmessage} style={{ height: "40px", textAlign: "right", width: "95%",paddingTop:"5px",margin:"5px" }}>{(item.starlabel)&&<AiFillStar/>}
               <span style={{backgroundColor:"rgb(195, 224, 145)",fontSize:"18px", margin:"5px",border:"1px solid rgb(195, 224, 145)",borderRadius:"5px"}}>{item.messagedata}<span>{item.time}</span></span></div>
             
            );
          } else {
            let senderlogo;
            if (item.sendername.indexOf(" ") === -1) {
              senderlogo = item.sendername[0];
            } else {
              for (let i = 0; i < item.sendername.length; i++) {
                if (item.sendername[i] === " ") {
                  senderlogo = item.sendername[0] + item.sendername[i + 1];
                }
              }
            }
            return (
              <div  className={"receivermessagediv"} style={{
                textAlign: "left",
                width: "95%",
                height: "40px",
                display: "flex",
                margin: "5px",
              }} id={item.messageId}> <div onClick={starmessage} style={{display:"flex"}}>
                <div id="receiverlogo">{senderlogo}</div>{(item.starlabel)&&<AiFillStar/>}
               <div className='receivermessage' style={ {border:"1px solid rgb(211, 207, 207", backgroundColor:"rgb(211, 207, 207)",borderRadius:"5px"}} >{item.messagedata}<span>{item.time}</span></div>
              </div>
              </div>
            );
          }
        } 
      })}
    </div>
  );
}



