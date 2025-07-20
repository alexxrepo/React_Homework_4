import React from "react";
import checkedIcon from "../assets/checked.svg"
import uncheckedIcon from "../assets/unchecked.svg"
import maleIcon from "../assets/male.svg"
import femaleIcon from "../assets/female.svg"

function TableRow({patient}) {
    return (
        <tr>
            <td>{patient.name}</td>
            <td>{patient.surname}</td>
            <td>{patient.age}</td>
            <td>{patient.gender === "M" ? <img src={maleIcon} alt="M"/> : patient.gender === "F" ? <img src={femaleIcon} alt="F" /> : ""}</td>
            <td>{patient.kids}</td>
            <td>{patient.vaccinated ? <img src={checkedIcon} /> : <img src={uncheckedIcon} />}</td>
        </tr>
    );
}

export default TableRow;