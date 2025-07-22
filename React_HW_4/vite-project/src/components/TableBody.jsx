import React from "react";
import TableRow from "./TableRow";

function TableBody({patients, sortedArrayFunc}) {
    return (
        <tbody>
            {sortedArrayFunc(patients).map((patient) => (
                <TableRow key={patient.name + patient.surname} patient={patient}></TableRow>
            ))}
        </tbody>
    );
}

export default TableBody;