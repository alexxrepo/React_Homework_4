import React from "react";

function FilterForm() {
    return (
        <div className="filter-form">
            <h2>Фильтры</h2>
            <div className="filter">
                <label htmlFor="name-filter">Имя:</label>
                <input type="text" className="filter-input" id="name-filter"></input>
            </div>
            <div className="filter">
                <label htmlFor="min-age-filter">Минимальный возраст:</label>
                <input type="number" className="filter-input" id="min-age-filter"></input>
            </div>
            <div className="filter">
                <label htmlFor="max-age-filter">Максимальный возраст:</label>
                <input type="number" className="filter-input" id="max-age-filter"></input>
            </div>
            <div className="filter">
                <label htmlFor="kids-filter">Количество детей:</label>
                <input type="number" className="filter-input" id="kids-filter"></input>
            </div>
            <div className="filter">
                <label htmlFor="vaccinated-filter">Наличие прививки</label>
                <input type="checkbox" className="filter-checkbox" id="vaccinated-filter"></input>
            </div>
        </div>
    );
}

export default FilterForm;