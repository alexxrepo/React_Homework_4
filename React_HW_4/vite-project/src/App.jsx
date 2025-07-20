import { useState } from 'react'
import './App.css'
import patientsData from "./data/patients.json"
import Table from './components/Table';

function App() {
const [patients, setPatients] = useState(patientsData);

  return (
    <>
    <div className="app-wrapper">
      <h1 className='app-title'>Список пациентов</h1>
      <Table patients={patients}></Table>
    </div>
    </>
  )
}

export default App;
