function Favourites(){
    return <div ><h1>My favourite activities are:</h1><ul>
    <li>Reading</li><li>Laughing</li><li>Loving</li><li>Repeat</li></ul></div>;
}
const name1="boomer";
const name=<p>I am {name1}</p>
ReactDOM.render(<div>
    <Favourites/>
    <p className="Question">What are your favourite activities?{name1} </p>
    </div>
, document.getElementById("root"));

const head=document.createElement('h1');
head.textContent="Hello !!!";
head.className="Header";

const root=document.getElementById("root");
root.appendChild(head);
