import React from "react";

function Pagination() {
    return (
        <div className="pagination-wrapper">
            <select className="pagination-select">
                <option>5</option>
                <option>10</option>
                <option>20</option>
            </select>
            <ul className="pagination-list-wrapper">

            </ul>
        </div>
    );
}

export default Pagination;