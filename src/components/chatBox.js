import { BiSend } from "react-icons/bi";

export default function ChatBox(){
    return(
        <div className="box-container">
            <div className="box text">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <div className="box" id="chat">
                <form>
                    <input id="inp" type="text" placeholder="Message"/>
                    <button id="btn"><BiSend/></button>
                </form>
            </div>
        </div>
    )
}