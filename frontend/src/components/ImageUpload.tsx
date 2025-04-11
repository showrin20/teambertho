import React, { useState } from 'react';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [message, setMessage] = useState('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleUpload = async () => {
    if (!image || !title) {
      setMessage('Please provide both an image and a title.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title); // Append the title to formData

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Image uploaded successfully!');
        setImage(null);
        setTitle(''); // Clear the title input
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.error(error);
      setMessage('Image upload failed.');
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        required
      />
      <input 
        type="text" 
        value={title} 
        onChange={handleTitleChange} 
        placeholder="Enter image title" 
        required 
        className="mt-4 p-2 border border-gray-300 rounded"
      />
      <button 
        onClick={handleUpload} 
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Upload
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default ImageUpload;
