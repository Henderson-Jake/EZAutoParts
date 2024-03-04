import React, { useState } from 'react';
import '../styles/VehicleSelectionTool.css';

const VehicleSelectionTool = () => {
  const years = ["2020", "2021", "2022"];
  const makes = ["Toyota", "Honda", "Ford"];
  const models = ["Camry", "Accord", "F-150"];
  const engines = ["V6", "4-cylinder", "V8"];

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

  return (
    <div className="VehicleSelectionTool">
      <div className="vehicleInputs">
        <div>Add Your Vehicle:</div>
        <select value={year} onChange={(e) => setYear(e.target.value)} required>
          <option value="" disabled>Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select value={make} onChange={(e) => setMake(e.target.value)} required>
          <option value="" disabled>Select Make</option>
          {makes.map((make) => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>
        <select value={model} onChange={(e) => setModel(e.target.value)} required>
          <option value="" disabled>Select Model</option>
          {models.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
        <select value={engine} onChange={(e) => setEngine(e.target.value)} required>
          <option value="" disabled>Select Engine</option>
          {engines.map((engine) => (
            <option key={engine} value={engine}>{engine}</option>
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

