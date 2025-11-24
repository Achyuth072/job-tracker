"use client"; // This tells Next.js: "This part happens in the browser"

import Link from "next/link";
import { useState } from "react";
import { createJob } from "../actions";

export default function CreateJobPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200 w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Add New Application</h1>
        
        {/* The Form */}
        <form action={createJob} className="space-y-4">
          
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
            <input 
              type="text" 
              name="company"
              className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
              placeholder="e.g. Whitecarrot"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
            <input 
              type="text" 
              name="role"
              className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
              placeholder="e.g. Frontend Engineer"
              required
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Current Status</label>
            <select 
              name="status"
              className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
            >
              <option value="Applied">Applied</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6 pt-4">
            <Link 
              href="/" 
              className="w-1/3 py-2 px-4 text-center rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </Link>
            <button 
              type="submit"
              className="w-2/3 py-2 px-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
            >
              Save Job
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}