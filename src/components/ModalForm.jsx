import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
const ModalForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", email: "" });

    window.location.href = "https://t.me/paypips_adminBot";
  };
  console.log(submittedData);
  return (
    <div className=" w-full rounded-xl space-y-4">
      <h1 className="text-2xl font-bold text-center">Get Started</h1>
      <form onSubmit={handleSubmit} className="space-y-16">
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className=" bg-blue-accent px-4 text-sm flex gap-2 items-center  text-white p-2 rounded-md shadow-md hover:bg-blue-700"
          >
            Proceed <FaArrowRight />
          </button>
        </div>
      </form>
      {/* {submittedData.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mt-4">Submitted Data</h2>
          <ul className="list-disc list-inside">
            {submittedData.map((data, index) => (
              <li key={index} className="mt-2">
                {data.name} - {data.email}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default ModalForm;
