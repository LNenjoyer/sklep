import './sklep.css';
import React from "react";

const Sklep = (props)=>(
<table>
    <tbody>
        <tr>
            <td>
                <div>
                    <img src={props.photo1} alt={props.name1}/>
                    {props.name1}
                    {props.desc1}
                </div>
            </td>
            <td>
                <img src={props.photo2} alt={props.name2}/>
                {props.name2}
                {props.desc2}
            </td>
            <td>
                <img src={props.photo3} alt={props.name3}/>
                {props.name3}
                {props.desc3}
            </td>
        </tr>
    </tbody>

</table>
);
export default Sklep;