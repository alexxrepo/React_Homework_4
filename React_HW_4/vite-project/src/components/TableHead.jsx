import React from "react";

function TableHead() {
    const headers = [
        {name: "Имя", dataName: "name"},
        {name: "Фамилия", dataName: "surname"},
        {name: "Возраст", dataName: "age"},
        {name: "Пол", dataName: "gender"},
        {name: "Количество детей", dataName: "kids"},
        {name: "Прививка от COVID-19", dataName: "vaccinated"}
    ];
    return(
        <thead className="table-head">
            <tr className="table-head-row">
                {headers.map((header) => (
                    <th key={header.dataName} className="table-head-cell" data-name={header.dataName}>{header.name}</th> 
                ))}
            </tr>
        </thead>
    );
}

export default TableHead;