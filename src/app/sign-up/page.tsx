"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  company: string;
  phone: string;
  role: string;
}

export default function Sign_up() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: '',
    role: 'technician'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const navigateToSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl">
        {/* Left side - Form */}
        <div className="w-2/3 p-10">
          <div className="text-left font-bold text-blue-900 text-2xl mb-2">
            <span className="text-blue-500">Machine</span>Maintain
          </div>
          <div className="py-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Create Account</h2>
            <div className="border-2 w-10 border-blue-900 inline-block mb-2"></div>
            <p className="text-gray-600 mb-6">Join our platform to manage all your maintenance needs</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-lg px-4 py-2 border focus:border-blue-500 focus:outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-1">Company</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-lg px-4 py-2 border focus:border-blue-500 focus:outline-none"
                  placeholder="Company Name"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col mt-4">
              <label className="text-gray-600 text-sm mb-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-100 rounded-lg px-4 py-2 border focus:border-blue-500 focus:outline-none"
                placeholder="email@company.com"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-1">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-lg px-4 py-2 border focus:border-blue-500 focus:outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-1">Confirm Password</label>
                <input 
                  type="password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-lg px-4 py-2 border focus:border-blue-500 focus:outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-lg px-4 py-2 border focus:border-blue-500 focus:outline-none"
                  placeholder="+1 (234) 567-8900"
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-1">Role</label>
                <select 
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-lg px-4 py-2 border focus:border-blue-500 focus:outline-none"
                >
                  <option value="technician">Maintenance Technician</option>
                  <option value="manager">Facility Manager</option>
                  <option value="engineer">Engineer</option>
                  <option value="administrator">Administrator</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center mt-6">
              <input 
                type="checkbox" 
                id="agreeTerms" 
                className="mr-2" 
                required
              />
              <label htmlFor="agreeTerms" className="text-gray-600 text-sm">
                I agree to the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
              </label>
            </div>
            
            <button 
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full px-8 py-3 mt-6 font-semibold w-full hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg"
            >
              Create Account
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account? 
                <button 
                  type="button"
                  onClick={navigateToSignIn}
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </div>
        
        {/* Right side - Illustration and info */}
        <div className="w-1/3 bg-gradient-to-b from-blue-700 to-blue-900 text-white rounded-r-2xl px-8 py-12 flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Streamline Your Maintenance Operations</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of maintenance professionals who use our platform to optimize their workflow.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Predictive maintenance alerts</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Equipment history tracking</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 极z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Maintenance scheduling</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 极 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Inventory management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}