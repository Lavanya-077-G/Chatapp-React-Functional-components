import {BiStar} from "react-icons/bi" ;
import {useContext} from 'react';
import {useDispatch} from 'react-redux';
import{ messageContext} from './App.js';
import{BiDotsVerticalRounded} from 'react-icons/bi'
// import starclick from "./messagebody.js"
let logo;
export default function Header(props) {
const messagearray=useContext(messageContext);
const {starclick,opendropdown,dropdown,openList}=messagearray;
// const dispatch = useDispatch();

  let pos=(props.pername).indexOf(" ");
  if(pos===-1){
  logo=props.pername[0];
   
  }
  else{
    for(let i=0;i<(props.pername).length;i++){
      if(props.pername[i]===" ")
      {
       logo=props.pername[0]+props.pername[i+1];
      }
    }
  }
    return(<div className='header-detail'>
      <div className='logo'>{logo}</div>
      <div className='username'>{props.pername}</div>
      <button className="starbutton" onClick={()=>{starclick()}}><BiStar/></button>
      <button className="starbutton" onClick={()=>{opendropdown()}}><BiDotsVerticalRounded/></button>{(dropdown)&&openList()}
    </div>)
  }
  