import Header from './header.js';
import Footer from './footer.js';
import Messagebody from "./messagebody.js"
export default function Messagecontainer(details){
    return(<div id={details.name} className='sender'><Header pername={details.name}/><Messagebody name={details.name} /><Footer val={details.id}/> </div>)
}

 