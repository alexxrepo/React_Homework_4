import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function Table({patients, sortKey, sortDir, onSort, sortedArrayFunc}) {
    return (
        <table className="patient-table">
            <TableHead sortKey={sortKey} sortDir={sortDir} onSort={onSort}></TableHead>
            <TableBody patients={patients} sortedArrayFunc={sortedArrayFunc}></TableBody>
        </table>
    );
}

export default Table;