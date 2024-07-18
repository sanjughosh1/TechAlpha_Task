import React, { useState } from 'react';

const MyAddress = () => {
  const [addresses, setAddresses] = useState([
    { name: 'Hostel', address: 'Dilshuk Nagar, Hyderabad' },
    { name: 'Hostel2', address: 'Manjeera Trinity, Kukatpally, Hyderabad' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddAddress = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({ name: '', address: '' });
  };

  const handleEditAddress = (index) => {
    setShowForm(true);
    setIsEditing(true);
    setEditIndex(index);
    setFormData(addresses[index]);
  };

  const handleDeleteAddress = (index) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  };

  const handleSaveAddress = () => {
    if (isEditing) {
      const newAddresses = [...addresses];
      newAddresses[editIndex] = formData;
      setAddresses(newAddresses);
    } else {
      setAddresses([...addresses, formData]);
    }
    setShowForm(false);
    setFormData({ name: '', address: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          className="flex items-center justify-center border p-4 rounded-lg shadow-lg bg-white cursor-pointer"
          onClick={handleAddAddress}
        >
          <button className="text-center">
            <span className="text-red-500 text-2xl">+</span>
            <p className="text-red-500">Add Address</p>
          </button>
        </div>
        {addresses.map((address, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
            <h2 className="text-lg font-bold">{address.name}</h2>
            <p className="text-gray-600">{address.address}</p>
            <div className="mt-4 flex justify-between text-sm">
              <button
                className="text-red-500"
                onClick={() => handleEditAddress(index)}
              >
                Edit
              </button>
              <button
                className="text-red-500"
                onClick={() => handleDeleteAddress(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{isEditing ? 'Edit Address' : 'Add Address'}</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white p-2 rounded"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={handleSaveAddress}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddress;
