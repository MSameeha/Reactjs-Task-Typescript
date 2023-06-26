import React, { ChangeEvent, FormEvent, useState } from "react";

interface UpdateProfilePictureProps {
    onUpdate: (image: File | null) => void;
  }


const UpdateProfilePicture: React.FC<UpdateProfilePictureProps> = ({ onUpdate }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file || null);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform the upload logic here, e.g., make an API call to upload the selectedImage
    console.log("Selected image:", selectedImage);

    // Clear the selected image after submission
    setSelectedImage(null);
  };

  console.log("In Update profile pic");

  return (
    <div>
      <h2>Update Profile Picture</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleImageUpload} />
        <button type="submit">Upload</button>
      </form> 
    </div>
  );
};

export default UpdateProfilePicture;
