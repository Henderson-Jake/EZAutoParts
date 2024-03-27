import React, { useState } from 'react';
import '../styles/VehicleSelectionTool.css';

const VehicleSelectionTool = () => {
  const years = ["2020", "2021", "2022"];
  const makes = ["Toyota", "Honda", "Ford"];
  const modelsMap = {
    Toyota: ['Camry', 'Corolla', 'Prius' , 'Tacoma'],
    Honda: ['Accord', 'Civic', 'CRV', 'Pilot'],
    Ford: ['Bronco', 'F150', 'F250', 'Fiesta', ],
  };
  const enginesMap = {
    Camry: ['V6', 'L4'],
    Corolla: ['L4'],
    Prius: ['L4'],
    Tacoma: ['L4', 'V6'],
    Accord: ['L4'],
    Civic: ['L4'],
    CRV: ['L4'],
    Pilot: ['V6'],
    Bronco: ['L4', 'V6'],
    Escape: ['L3', 'L4'],
    F150: ['V6'],
    F250: ['V8'],
  };

  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState('');

  const on_submit = () => {
    console.log("Vehicle Selected");
    console.log(`Year: ${year}`);
    console.log(`Make: ${make}`);
    console.log(`Model: ${model}`);
    console.log(`Engine: ${engine}`);
  };

  const getModel = () => {
    return modelsMap[make] || [];
  };

  const getEngine = () => {
    return enginesMap[model] || [];
  };

  return (
    <div className="VehicleSelectionTool">
      <div className="vehicleInputs">
        <div >Add Your Vehicle:</div>
        <select value={year} onChange={(e) => setYear(e.target.value)} required>
          <option value="" disabled>
            Select Year
            </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select value={make} onChange={(e) => setMake(e.target.value)} required>
          <option value="" disabled>
            Select Make
          </option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
        <select value={model} onChange={(e) => setModel(e.target.value)} required>
          <option value="" disabled>
            Select Model
          </option>
          {getModel().map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
        <select value={engine} onChange={(e) => setEngine(e.target.value)} required>
          <option value="" disabled>Select Engine</option>
          {getEngine().map((engine) => (
            <option key={engine} value={engine}>
              {engine}
            </option>
          ))}
        </select>
      </div>
      <div className="submitContainer">
        <button onClick={on_submit}>GO</button>
      </div>
    </div>
  );
};

export default VehicleSelectionTool;

