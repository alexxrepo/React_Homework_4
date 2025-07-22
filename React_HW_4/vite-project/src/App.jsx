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

const sortUsers = ((key) => {
  
  if (sortKey === key) {
    setSortDir(sortDir === "none" ? "asc" : "desc");
  } else {
    setSortKey(key);
    setSortDir("none");
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
      <Table patients={patients}></Table>
      <Pagination></Pagination>
    </div>
    </>
  )
}

export default App;
