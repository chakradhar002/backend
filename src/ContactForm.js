import React, { useState } from 'react';
import { sendContactForm } from './service';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    queryDetails: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.phone) {
      errors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits.';
    }

    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid.';
    }

    if (!formData.queryDetails) {
      errors.queryDetails = 'queryDetails is required.';
    } else if (formData.queryDetails.length < 10) {
      errors.queryDetails = 'queryDetails must be at least 10 characters.';
    }

    if (!formData.city) {
      errors.city = 'City is required.';
    }

    return errors;
  };

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await sendContactForm(formData);
        setStatus('Form submitted successfully!');
      } catch (error) {
        setStatus('Failed to submit the form.');
      }
    } else {
      setStatus('Please fix the errors in the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control"
        />
        {errors.phone && <div className="text-danger">{errors.phone}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="queryDetails" className="form-label">Post Your Query:</label>
        <textarea
          id="queryDetails"
          name="queryDetails"
          value={formData.queryDetails}
          onChange={handleChange}
          className="form-control"
          rows="4"
        />
        {errors.queryDetails && <div className="text-danger">{errors.queryDetails}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control"
        />
        {errors.city && <div className="text-danger">{errors.city}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      {status && <div className="mt-3">{status}</div>}
    </form>
  );
};

export default ContactForm;
