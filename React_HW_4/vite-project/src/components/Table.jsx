import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function Table({patients}) {
    return (
        <table className="patient-table">
            <TableHead></TableHead>
            <TableBody patients={patients}></TableBody>
        </table>
    );
}

export default Table;