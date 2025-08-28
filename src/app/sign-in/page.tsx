"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function Sign_in() {
  const router = useRouter();
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login submission here
    console.log('Login submitted:', loginData);
  };

  const navigateToSignUp = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl">
        {/* Left side - Illustration and info */}
        <div className="w-2/5 bg-gradient-to-b from-blue-700 to-blue-900 text-white rounded-l-2xl px-8 py-12 flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Welcome Back to MachineMaintain</h3>
            <p className="text-blue-100 mb-6">
              Access your maintenance dashboard and continue optimizing your operations.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Track equipment performance</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 极 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Manage maintenance schedules</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 极 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Review maintenance history</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Generate performance reports</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Login Form */}
        <div className="w-3/5 p-10">
          <div className="text-left font-bold text-blue-900 text-2xl mb-2">
            <span className="text-blue-500">Machine</span>Maintain
          </div>
          <div className="py-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Sign In</h2>
            <div className="border-2 w-10 border-blue-900 inline-block mb-2"></div>
            <p className="text-gray-600 mb-6">Welcome back! Please enter your details to access your account.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="bg-gray-100 rounded-lg px-4 py-2 border focus:border-blue-500 focus:outline-none"
                placeholder="email@company.com"
                required
              />
            </div>
            
            <div className="flex flex-col mt-4">
              <label className="text-gray-600 text-sm mb-1">Password</label>
              <input 
                type="password" 
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="bg-gray-100 rounded-lg px-4 py-2 border focus:border-blue-500 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="rememberMe"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleChange}
                  className="mr-2" 
                />
                <label htmlFor="rememberMe" className="text-gray-600 text-sm">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
            
            <button 
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full px-8 py-3 mt-6 font-semibold w-full hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg"
            >
              Sign In
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account? 
                <button 
                  type="button"
                  onClick={navigateToSignUp}
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Sign Up
                </button>
              </p>
            </div>
            
            <div className="mt-6">
              <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600 text-sm">Or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button 
                  type="button"
                  className="bg-white border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </button>
                
                <button 
                  type="button"
                  className="bg-white border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 20h-2v-8h2v8zm-1-10.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm7 10.5h-2v-4.5c0-1.105-.895-2-2-2s-2 .895-2 2v4.5h-2v-8h2v1.5c.828-1.5 2.5-1.5 3.5 0v-1.5h2v8z"/>
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}