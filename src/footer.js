import React, {  useContext, useState,useRef} from "react";
import {messageContext }from './App.js';

import {MdSend} from "react-icons/md" ;
export default function Footer({val}) {
const user=useContext(messageContext)
const {Changevalue,myRef,Changeinput}=user;
    return (<div className="footer" id={val}>
        <input  className="message-box" placeholder="Message"  onChange={(e)=>{Changeinput(e)}} onKeyPress={(e) => (e.key === 'Enter')&& Changevalue(e)}></input>
        <button className="send-button" onClick={(e)=>{Changevalue(e)}} ><MdSend/></button>
    </div>)
}
