import './sklep.css';
import React from "react";

const Sklep = (props)=>(
<table>
    <tbody>
        <tr>
            <td>
                <p><img src={props.photo1} alt={props.name1}/></p>
                <p>{props.name1}</p>
                <p>{props.desc1}</p>

            </td>
            <td>
                <p><img src={props.photo2} alt={props.name2}/></p>
                <p>{props.name2}</p>
                <p>{props.desc2}</p>

            </td>
            <td>
                <p><img src={props.photo3} alt={props.name3}/></p>
                <p>{props.name3}</p>
                <p>{props.desc3}</p>
            </td>
        </tr>
    </tbody>

</table>
);
export default Sklep;