import React, { useState } from "react";
import "./App.css";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  phone: string;
  problem: string;
};

const API_ENDPOINT="https://x0x0.execute-api.us-east-1.amazonaws.com/production";

const Form: React.FC = () => {
  const [note, setNote] = useState<string>("...");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    problem: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    // Basic validation, you can add more specific validation here if needed
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required.";
    } else if (!/^[0-9]*$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number, all numbers.";
    }
    if (!formData.problem) {
      newErrors.problem = "Nature of Problem is required.";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await axios.post(API_ENDPOINT, formData);

        if (response.status === 200) {
          // Successful submission, you can add a thank you message here
          setNote("Thank you for submitting the form! We've received your submission and will be in touch.");
        }  else { 
          setNote(response.status.toString());
      }
    } catch (error) {
      setNote("There was an error submitting the form, but that's okay if you're not using a real API endpoint. If you were & it worked, you would've seen a 'thank you' here.");
    }
    };
  };

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          <label htmlFor="name">Name:</label>
        </p>
        <p>
          <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          />
        </p>
        <p>{errors.name && <span>{errors.name}</span>}</p>
      </div>
      <div>
        <p>
          <label htmlFor="email">Email:</label>
        </p>
        <p>
          <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        </p>
        <p>{errors.email && <span>{errors.email}</span>}</p>
      </div>
      <div>
        <p>
          <label htmlFor="phone">Phone:</label>
        </p>
        <p>
          <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          />
        </p>
        <p>{errors.phone && <span>{errors.phone}</span>}</p>
      </div>
      <div>
        <p>
          <label htmlFor="problem">Nature of Problem:</label>
        </p>
        <p>
          <textarea
          id="problem"
          name="problem"
          value={formData.problem}
          onChange={handleInputChange}
          />
        </p>
        <p>{errors.problem && <span>{errors.problem}</span>}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
    <p>{note}</p>
  </div>
  );
};

export default Form;
