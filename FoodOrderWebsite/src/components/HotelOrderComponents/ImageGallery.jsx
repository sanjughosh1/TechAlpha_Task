import React, { useState } from 'react';

const ImageGallery = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = () => {
    // Handle the image upload logic here
    // For now, we just display the image and description
    console.log("Image uploaded:", image);
    console.log("Description:", description);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <img src="/images/fortheloveofbiryani.jpg" alt="Dish" className="w-full h-full object-cover rounded-md" />
      <div className="col-span-2 grid grid-cols-3 gap-2">
        {/* Example images */}
        <img src="/images/food1.jpg" alt="Dish" className="w-full h-full object-cover rounded-md" />
        <img src="/images/food2.jpg" alt="Dish" className="w-full h-full object-cover rounded-md" />
        <img src="/images/food3.jpg" alt="Dish" className="w-full h-full object-cover rounded-md" />
        <img src="/images/orderonline.jpg" alt="Dish" className="w-full h-full object-cover rounded-md" />
        <img src="/images/proandproplus.jpg" alt="Dish" className="w-full h-full object-cover rounded-md" />
        <div className="relative bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
        {image ? (
          <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
        ) : (
          <label className="cursor-pointer">
            <div className="flex flex-col items-center justify-center h-full">
              <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <span className="text-gray-500">Add Photos</span>
            </div>
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        )}
        {image && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 flex flex-col">
            <textarea
              placeholder="Enter description..."
              className="border border-gray-300 rounded-md p-2 mb-2"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            <button className="bg-blue-500 text-white rounded-md p-2" onClick={handleUpload}>
              Upload
            </button>
          </div>
        )}
      </div>
      </div>
      
    </div>
  );
};

export default ImageGallery;
