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
  console.log(dataName);
  console.log(sortDir);
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


//Состояния для пагинации
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(10);
const [currentPageItems, setCurrentPageItems] = useState();

  return (
    <>
    <div className="app-wrapper">
      <h1 className='app-title'>Список пациентов</h1>
      <FilterForm></FilterForm>
      <Table patients={patients} sortKey={sortKey} sortDir={sortDir} onSort={sortUsers} sortedArrayFunc={getSortedArray}></Table>
      <Pagination></Pagination>
    </div>
    </>
  )
}

export default App;
