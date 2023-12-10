import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

function NeccaryForm() {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [radioButtonValue, setRadioButtonValue] = useState('option1');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileDrop = (acceptedFiles) => {
    setSelectedFiles([...selectedFiles, ...acceptedFiles]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form data to be submitted to the backend
    const formData = new FormData();
    formData.append('checkBoxValue',checkBoxValue);
    formData.append('radioButtonValue',radioButtonValue);
    formData.append('selectedOption',selectedOption);
    formData.append('files',selectedFiles);
    //   selectedFiles.forEach((file) => formData.append('files', file));

    // const formData = {
    //   checkBoxValue,
    //   radioButtonValue,
    //   selectedOption,
    // //   files: selectedFiles,
    // };
    console.log('Data submitted successfully:', formData);
       
      selectedFiles.forEach((file) => formData.append('files', file));
    // Replace 'http://localhost:4001/submit' with your backend endpoint
    axios.post('http://localhost:4001/submit', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('Data submitted successfully:', response.data);
        // Do something with the response, e.g., show a success message
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
        // Show an error message if data submission fails
      });
  };

  return (
    <div>
      <h1>React App with Form Elements</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="checkbox"
            checked={checkBoxValue}
            onChange={(e) => setCheckBoxValue(e.target.checked)}
          />
          <label>Checkbox</label>
        </div>
        <div>
          <input
            type="radio"
            value="option1"
            checked={radioButtonValue === 'option1'}
            onChange={(e) => setRadioButtonValue(e.target.value)}
          />
          <label>Option 1</label>
          <input
            type="radio"
            value="option2"
            checked={radioButtonValue === 'option2'}
            onChange={(e) => setRadioButtonValue(e.target.value)}
          />
          <label>Option 2</label>
        </div>
        <div>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div>
          <Dropzone onDrop={handleFileDrop} accept="image/*,.pdf,.doc,.docx,.txt">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
                <input {...getInputProps()} />
                <p>Drag and drop files here, or click to select files.</p>
                {selectedFiles.length > 0 && (
                  <div>
                    <h4>Selected Files:</h4>
                    <ul>
                      {selectedFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </Dropzone>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NeccaryForm;
