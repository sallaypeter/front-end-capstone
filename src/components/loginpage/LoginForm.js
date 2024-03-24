import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    password: '',
    number: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Reset errors when the field is changed
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm(); // Move the validation call here
    if (isValid) {
      console.log(formData);
      // Here you can perform any further actions with the form data
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (formData.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long.';
      valid = false;
    }

    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      errors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!formData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/)) {
      errors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
      valid = false;
    }

    if (formData.number < 1 || formData.number > 10) {
      errors.number = 'Number must be between 1 and 10.';
      valid = false;
    }

    // Date validation
    if (!formData.date) {
      errors.date = 'Date is required.';
      valid = false;
    }

    // Time validation
    if (!formData.time) {
      errors.time = 'Time is required.';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const isFormValid = formData.name.length >= 3 &&
                      formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/) &&
                      formData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/) &&
                      formData.number >= 1 && formData.number <= 10 &&
                      formData.date !== '' && formData.time !== '';

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {formErrors.date && <span style={{ color: 'red' }}>{formErrors.date}</span>}
      </label>
      <br />
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        {formErrors.time && <span style={{ color: 'red' }}>{formErrors.time}</span>}
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <span style={{ color: 'red' }}>{formErrors.name}</span>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && <span style={{ color: 'red' }}>{formErrors.password}</span>}
      </label>
      <br />
      <label>
        Number:
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
        {formErrors.number && <span style={{ color: 'red' }}>{formErrors.number}</span>}
      </label>
      <br />
      <button type="submit" disabled={!isFormValid}>Submit</button>
    </form>
  );
}

export default LoginForm;
