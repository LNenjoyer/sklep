import './App.css';
import './sklep';
import Sklep from "./sklep";
import telefon from './telefon.png';
import monitor from './monitor.png'
import grafika from  './grafika.png'

const Produkt =[
  {name:"XIAOMI POCO", photo:telefon, desc:"1000.00"},
    {name:"MSI MAG401QR", photo:monitor, desc:"1200.00"},
    {name:"MSI 4070 TI SUPER 16G", photo:grafika, desc:"4700.00"}
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
