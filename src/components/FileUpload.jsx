import {Buffer} from 'buffer';
import React from 'react';

function FileUpload({setFile}) {
  const [fileName, setFileName] = React.useState('No file chosen');

  async function handleFileUpload(event){
    const fileUpload = await event.target.files[0].arrayBuffer();
    const file = {
      type: event.target.files[0].type,
      file: Buffer.from(fileUpload).toString("base64"),
      imageUrl: event.target.files[0].type.includes("pdf") ? "/document-icon.png" : URL.createObjectURL(event.target.files[0])
    }
    setFileName(event.target.files[0].name);
    setFile(file);
  }

  return (
    <section>
      <div className="file-upload-wrapper">
        <label className="custom-file-label">
          <span className="file-icon" aria-hidden="true">
            {/* Simple SVG file icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="2" width="14" height="16" rx="3" fill="#d4d4d4"/>
              <rect x="6" y="6" width="8" height="2" rx="1" fill="#23232a"/>
              <rect x="6" y="10" width="8" height="2" rx="1" fill="#23232a"/>
            </svg>
          </span>
          <span className="file-label-text">Choose File</span>
          <input 
            type="file" 
            accept=".pdf, .jpg, .jpeg, .png"
            onChange={handleFileUpload}
            className="file-input"
          />
        </label>
        <span className="file-chosen">{fileName}</span>
      </div>
    </section>
  )
}

export default FileUpload
  