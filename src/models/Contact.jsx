import React, { useState } from 'react';

const Contact = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPhoneNumber: ''
  });

  const [errors, setErrors] = useState({
    userFirstName: false,
    userLastName: false,
    userEmail: false,
    userPhoneNumber: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    const formValid = Object.values(formData).every(value => value.trim() !== '');
    if (!formValid) {
      // Set errors for empty fields
      const updatedErrors = {};
      for (const key in formData) {
        if (formData[key].trim() === '') {
          updatedErrors[key] = true;
        } else {
          updatedErrors[key] = false;
        }
      }
      setErrors(updatedErrors);
      return;
    }

    // If all fields are filled, proceed with submission
    alert("Your booking is done");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form onSubmit={handleSubmit} className='w-80 md:w-96 space-y-5 bg-slate-400 p-5 rounded-xl'>
          <h1 className="text-4xl font-semibold text-center">Book Now</h1>
          <div className="flex flex-col">
            <input type="text" name='userFirstName' id='userFirstName' placeholder='First Name' className={`py-3 px-2 bg-[#d5f2ec] rounded-lg ${errors.userFirstName && 'border-red-500'}`} value={formData.userFirstName} onChange={handleChange} />
            {errors.userFirstName && <p className="text-red-500 text-sm">Please fill this field</p>}
          </div>
          <div className="flex flex-col">
            <input type="text" name='userLastName' id='userLastName' placeholder='Last Name' className={`py-3 px-2 bg-[#d5f2ec] rounded-lg ${errors.userLastName && 'border-red-500'}`} value={formData.userLastName} onChange={handleChange} />
            {errors.userLastName && <p className="text-red-500 text-sm">Please fill this field</p>}
          </div>
          <div className="flex flex-col">
            <input type="email" name='userEmail' id='userEmail' placeholder='Email' className={`py-3 px-2 bg-[#d5f2ec] rounded-lg ${errors.userEmail && 'border-red-500'}`} value={formData.userEmail} onChange={handleChange} />
            {errors.userEmail && <p className="text-red-500 text-sm">Please fill this field</p>}
          </div>
          <div className="flex flex-col">
            <input type="number" name='userPhoneNumber' id='userPhoneNumber' placeholder='Phone Number' className={`py-3 px-2 bg-[#d5f2ec] rounded-lg ${errors.userPhoneNumber && 'border-red-500'}`} value={formData.userPhoneNumber} onChange={handleChange} />
            {errors.userPhoneNumber && <p className="text-red-500 text-sm">Please fill this field</p>}
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
              Book A Session
            </button>
            <button type="button" className="bg-backgroundColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" onClick={closeForm}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
