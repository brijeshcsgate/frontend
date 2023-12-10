// ////////////////////////////////////////////
// /////////////////////////for handling one file
// ///////////////////////////////////

// import React, { useState } from 'react';
// import axios from 'axios';
// import Dropzone from 'react-dropzone';

// function FileForm() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileDrop = (acceptedFiles) => {
//     setSelectedFile(acceptedFiles[0]);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       axios.post('http://localhost:4001/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }).then((response) => {
//         console.log('File uploaded successfully:', response.data);
//         // Do something with the response, e.g., show a success message
//       }).catch((error) => {
//         console.error('Error uploading file:', error);
//         // Show an error message if the upload fails
//       });
//     }
//   };

//   return (
//     <div>
//       <h1>MERN App for Handling Multiple Images and Files</h1>
//       <Dropzone onDrop={handleFileDrop}>
//         {({ getRootProps, getInputProps }) => (
//           <div {...getRootProps()}>
//             <input {...getInputProps()} />
//             <p>Drag and drop a file here, or click to select a file.</p>
//           </div>
//         )}
//       </Dropzone>
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default FileForm;






/////////////////////////////
////////////////////for handling multiple images
////////////////////////////


import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

function FileForm() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileDrop = (acceptedFiles) => {
    setSelectedFiles([...selectedFiles, ...acceptedFiles]);
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      selectedFiles.forEach((file) => formData.append('files', file));

      axios.post('http://localhost:4001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        console.log('Files uploaded successfully:', response.data);
        // Do something with the response, e.g., show a success message
        setSelectedFiles([]); // Clear selected files after successful upload
      }).catch((error) => {
        console.error('Error uploading files:', error);
        // Show an error message if the upload fails
      });
    }
  };

  return (
    <div>
      <h1>MERN App for Handling Multiple Images and Files</h1>
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
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileForm;
