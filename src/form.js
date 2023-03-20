import React from 'react';
import { useState } from 'react';
import './index.css';
import { convertFile } from './api_axios';


function Form() {
    const [file, setFile] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

      console.log(file);
      const response = convertFile(file)
      console.log(response)
  }
  return(
    <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Konvertera Key till Ppt</h1>
            <h1 className="underline">Skapat för Sitoo AB</h1>
            <label htmlFor="file-upload">Fil att konvertera</label>
            <input id="file-upload" type="file" onChange={handleFileInputChange} />
            <button type="submit">Konvertera fil</button>
            <div className="download-label">Nedladdning påbörjas snaart, var god avvakta.</div>
        </form>
    </div>
  )
}

export default Form;
