import { SiChatbot } from "react-icons/si";


export default function Navbar(){
    return(
        <nav>
            <div className="nav-container">
                <ui className="lists">
                    <li className="list" id="icon">
                        <SiChatbot/>
                    </li>
                    <li className="list">
                        Chatbot
                    </li>
                </ui>
            </div>
        </nav>
    )
}