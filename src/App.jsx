import "./App.css";
import Title from "./Title";
import MsgBox from "./MsgBox";

function App(){
    return(
        <div className="totle">
            <MsgBox username = "amarnath" textColor="red"/>
            <MsgBox username = "gupta" textColor="blue"/>
        </div>
    );
}

export default App;