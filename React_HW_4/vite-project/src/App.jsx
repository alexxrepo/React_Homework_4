import { useState } from 'react'
import './App.css'
import patientsData from "./data/patients.json"
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import Pagination from './components/Pagination';

function App() {
const [patients, setPatients] = useState(patientsData);

// Состояния для сортировки
const [sortKey, setSortKey] = useState("none");
const [sortDir, setSortDir] = useState("none");

const sortUsers = ((dataName) => {
  if (sortKey !== dataName) {
    setSortKey(dataName);
    setSortDir("asc");
  } else {
    if (sortDir === "asc") {
      setSortDir("desc");
    } else if (sortDir === "desc") {
      setSortDir("none");
      setSortKey(null);
    } else {
      setSortDir("asc");
    }
  }
});

const getSortedArray = ((arrayToSort) => {
  if (sortDir === "asc") {
    return [...arrayToSort].sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));
  } else if (sortDir === "desc") {
    return [...arrayToSort].sort((a, b) => (a[sortKey] > b[sortKey] ? -1 : 1));
  } else {
    return arrayToSort;
  }
});

const sortedPatients = getSortedArray(patientsData);

// Состояния для фильтрации
const [filterValues, setFilterValues] = useState({
  name: "",
  minAge: "",
  maxAge: "",
  kids: "",
  vaccinated: false
});

const allAges = patientsData.map(patient => patient.age);
const allKids = patientsData.map(patient => patient.kids);

const minMaxAges = {
  min: Math.min(...allAges),
  max: Math.max(...allAges),
}

const minMaxKids = {
  min: Math.min(...allKids),
  max: Math.max(...allKids),
}

const applyFilters = (currentFilterValues) => {
  const {name, minAge, maxAge, kids, vaccinated} = currentFilterValues;

  const newFilteredPatients = patientsData.filter((patient) => {
    const matchesName = (name === "" || patient.name.toLowerCase().includes(name.toLowerCase()) || patient.surname.toLowerCase().includes(name.toLowerCase()));
    const matchesMinAge = (minAge === "" || patient.age >= minAge);
    const matchesMaxAge = (maxAge === "" || patient.age <= maxAge);
    const matchesKids = (kids === "" || patient.kids === kids);
    const matchesVaccinated = (!vaccinated || patient.vaccinated === true);

    return matchesName && matchesMinAge && matchesMaxAge && matchesKids && matchesVaccinated;
  });

  
}


//Состояния для пагинации
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(10);
const [currentPageItems, setCurrentPageItems] = useState();

  return (
    <>
    <div className="app-wrapper">
      <h1 className='app-title'>Список пациентов</h1>
      <FilterForm></FilterForm>
      <Table patients={sortedPatients} sortKey={sortKey} sortDir={sortDir} onSort={sortUsers}></Table>
      <Pagination></Pagination>
    </div>
    </>
  )
}

export default App;
