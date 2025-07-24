import React from "react";

function FilterForm({filterValues, onFilterChange}) {
    return (
        <div className="filter-form">
            <div className="filter">
                <label htmlFor="name-filter">Имя:</label>
                <input type="text" className="filter-input" id="name-filter" name="name" value={filterValues.name} onChange={(e) => onFilterChange("name", e.target.value)}></input>
            </div>
            <div className="filter">
                <label htmlFor="min-age-filter">Минимальный возраст:</label>
                <input type="number" className="filter-input" id="min-age-filter" name="minAge" value={filterValues.minAge} onChange={(e) => onFilterChange("minAge", e.target.value)}></input>
            </div>
            <div className="filter">
                <label htmlFor="max-age-filter">Максимальный возраст:</label>
                <input type="number" className="filter-input" id="max-age-filter" name="maxAge" value={filterValues.maxAge} onChange={(e) => onFilterChange("maxAge", e.target.value)}></input>
            </div>
            <div className="filter">
                <label htmlFor="kids-filter">Количество детей:</label>
                <input type="number" className="filter-input" id="kids-filter" name="kids" value={filterValues.kids} onChange={(e) => onFilterChange("kids", e.target.value)}></input>
            </div>
            <div className="filter">
                <label htmlFor="vaccinated-filter">Наличие прививки</label>
                <input type="checkbox" className="filter-checkbox" id="vaccinated-filter" name="vaccinated" checked={filterValues.vaccinated} onChange={(e) => onFilterChange("vaccinated", e.target.checked)}></input>
            </div>
        </div>
    );
}

export default FilterForm;