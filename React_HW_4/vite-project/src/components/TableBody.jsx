import React from "react";
import TableRow from "./TableRow";

function TableBody({patients, sortedArray}) {
    return (
        <tbody>
            {sortedArray.map((patient) => (
                <TableRow key={patient.name + patient.surname} patient={patient}></TableRow>
            ))}
        </tbody>
    );
}

export default TableBody;