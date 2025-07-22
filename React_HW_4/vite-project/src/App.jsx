import { useState } from 'react'
import './App.css'
import patientsData from "./data/patients.json"
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import Pagination from './components/Pagination';

function App() {
// Состояния для сортировки
const [patients, setPatients] = useState(patientsData);
const [sortKey, setSortKey] = useState(null);
const [sortDir, setSortDir] = useState(null);

const sortUsers = (() => {
  
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
