import React from "react";
import TableRow from "./TableRow";

function TableBody({patients}) {
    return (
        <tbody>
            {patients.map((patient) => (
                <TableRow key={patient.name + patient.surname} patient={patient}></TableRow>
            ))}
        </tbody>
    );
}

export default TableBody;