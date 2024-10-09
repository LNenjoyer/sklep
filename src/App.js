import './App.css';
import './sklep';
import Sklep from "./sklep";
import telefon from './telefon.png';


const Produkt =[
  {name:"XIAOMI POCO", photo:telefon, desc:"telefon"},
    {name:"XIAOMI POCO", photo:telefon, desc:"telefon"},
    {name:"XIAOMI POCO", photo:telefon, desc:"telefon"}
]

const App = () =>(
    <div className="App">

        <Sklep name1={Produkt[0].name} photo1={Produkt[0].photo} desc1={Produkt[0].desc}
               name2={Produkt[1].name} photo2={Produkt[1].photo} desc2={Produkt[1].desc}
               name3={Produkt[2].name} photo3={Produkt[2].photo} desc3={Produkt[2].desc}
        />
        <Sklep name1={Produkt[0].name} photo1={Produkt[0].photo} desc1={Produkt[0].desc}
               name2={Produkt[1].name} photo2={Produkt[1].photo} desc2={Produkt[1].desc}
               name3={Produkt[2].name} photo3={Produkt[2].photo} desc3={Produkt[2].desc}
        />
        <Sklep name1={Produkt[0].name} photo1={Produkt[0].photo} desc1={Produkt[0].desc}
               name2={Produkt[1].name} photo2={Produkt[1].photo} desc2={Produkt[1].desc}
               name3={Produkt[2].name} photo3={Produkt[2].photo} desc3={Produkt[2].desc}
        />



    </div>
)
export default App;
