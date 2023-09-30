import { useState } from "react";
import JobIconDisplay from "./JobIconDisplay";

export default function RandomContainer() {
  const [jobs, setJobs] = useState([0,0,0,0]);
  
  const randomize = () => {

  }

  return (
    <div className="grid grid-cols-4 gap-2">

      {jobs.map(job => 
        <div className="text-sky-400 text-center bg-zinc-900 rounded-xl py-6">
            Job 1
          <JobIconDisplay/>
        </div>
        )}

      <button
      onClick={randomize} 
      className="my-8 bg-zinc-800 text-green-200 p-2 rounded-lg col-start-2 col-end-4">Randomize</button>
    </div>
  )
}