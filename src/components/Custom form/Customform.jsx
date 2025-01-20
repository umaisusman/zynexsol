import React, { useState } from 'react';
import axios from 'axios';
import './Customform.css';

const CustomForm = () => {
    const [formData, setFormData] = useState({
        serviceType: '',
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phoneNumber: '',
        budget: '',
        message: '',
        getNDA: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formResponse, setFormResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_KEY}/api/Nodemailer/submit-form`, {
                service: formData.serviceType,
                nda: formData.getNDA,
                firstname: formData.firstName,
                lastname: formData.lastName,
                email: formData.email,
                company: formData.company,
                phone: formData.phoneNumber,
                budget: formData.budget,
                message: formData.message,
            });

            if (response.status === 200) {
                setFormResponse('Form submitted successfully!');
            } else {
                setFormResponse('Failed to submit the form.');
            }
        } catch (error) {
            setFormResponse('An error occurred while submitting the form.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h2 className="main-title" style={{color:'#007B6E'}}> <strong> Bringing Your Vision to Life with Expertise </strong></h2>
            <div className="form-container">
                <p className="form-subtitle">Submit your information to drive success forward.</p>
                <form onSubmit={handleSubmit} className="custom-form">
                    <div className="service-type-group">
                        <label>
                            <input
                                type="radio"
                                name="serviceType"
                                value="Staff Augmentation"
                                checked={formData.serviceType === 'Staff Augmentation'}
                                onChange={handleChange}
                            />
                            Staff Augmentation
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="serviceType"
                                value="Dedicated Teams"
                                checked={formData.serviceType === 'Dedicated Teams'}
                                onChange={handleChange}
                            />
                            Dedicated Teams
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="serviceType"
                                value="Fixed Gigs"
                                checked={formData.serviceType === 'Fixed Gigs'}
                                onChange={handleChange}
                            />
                            Fixed Price
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="getNDA"
                                checked={formData.getNDA}
                                onChange={handleChange}
                            />
                           <span style={{fontSize:'20px'}}> Send me a copy of NDA</span>
                        </label>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="budget"
                            placeholder="Budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Tell us about your project we can help. What problem can we help you solve?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button style={{backgroundColor:'#007B6E'}} type="submit" className="submit-button" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {formResponse && <p className="form-response">{formResponse}</p>}
                </form>
            </div>
        </div>
    );
};

export default CustomForm;
