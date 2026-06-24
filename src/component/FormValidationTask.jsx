import React, { useState } from "react";


export default function FormValidationTask() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    address: "",
    city: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid Email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.dob) newErrors.dob = "DOB is required";

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.city.trim())
      newErrors.city = "City is required";

    if (!formData.country.trim())
      newErrors.country = "Country is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form Submitted Successfully");
      console.log(formData);
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Form Validation</h2>

        First Name<input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
        <span>{errors.firstName}</span>

        Last Name<input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
        <span>{errors.lastName}</span>

        Email<input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <span>{errors.email}</span>

        Phone<input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
        <span>{errors.phone}</span>

        Password<input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <span>{errors.password}</span>

        Confirm Password<input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        <span>{errors.confirmPassword}</span>

        Date of Birth<input type="date" name="dob" onChange={handleChange} />
        <span>{errors.dob}</span>

        Address<input name="address" placeholder="Address" onChange={handleChange}></input>
        <span>{errors.address}</span>

        City<input type="text" name="city" placeholder="City" onChange={handleChange} />
        <span>{errors.city}</span>

        Country<input type="text" name="country" placeholder="Country" onChange={handleChange} />
        <span>{errors.country}</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}