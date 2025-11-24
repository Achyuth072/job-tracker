import { getJobs } from "@/lib/data";
import Link from "next/link";

export default async function Home() {
  const jobs = await getJobs();
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Job Tracker</h1>
          <Link href="/create-job" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            + Add Job
          </Link>
        </div>

        {/* The List of Jobs */}
        <div className="grid gap-4">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center hover:shadow-md transition-shadow"
            >
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{job.role}</h2>
                <p className="text-slate-600">{job.companyName}</p>
                
                <div className="flex items-center gap-2 mt-2">
                   <span className="text-xs text-slate-400">
                     Applied: {job.dateApplied.toLocaleDateString("en-IN")}
                   </span>
                   {/* Conditional rendering: Only show AI analysis if it exists */}
                   {job.aiAnalysis && (
                     <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded border border-purple-200">
                       ✨ {job.aiAnalysis}
                     </span>
                   )}
                </div>
              </div>

              {/* Status Badge with Dynamic Colors */}
              <div className={`px-4 py-2 rounded-full text-sm font-medium border ${
                job.status === "Interviewing" ? "bg-blue-50 text-blue-700 border-blue-200" :
                job.status === "Applied" ? "bg-yellow-50 text-yellow-700 border-yellow-200" :
                job.status === "Rejected" ? "bg-red-50 text-red-700 border-red-200" :
                "bg-green-50 text-green-700 border-green-200"
              }`}>
                {job.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}