import { useState } from 'react';

function FileUploadComponent() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      // You can display an error message or perform other actions for invalid file types
    }
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();

    // Execute your logic using the selected file
    if (selectedFile) {
      // Example: Log the file details
      console.log('Selected file:', selectedFile);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex'>
            <div>
                <input type="file" accept=".pdf" onChange={handleFileChange} />
            </div>
            <div>
                <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow'>
                    Train Your ChatBot
                </button>
            </div>
        </div>
    </form>
  );
}

export default FileUploadComponent;
