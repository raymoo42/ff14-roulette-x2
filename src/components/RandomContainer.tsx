import { useState } from "react";
import JobIconDisplay from "./JobIconDisplay";
import TankList from "../util/TankList";
import HealerList from "../util/HealerList";
import DpsList from "../util/DpsList";

export default function RandomContainer() {
  const [jobs, setJobs] = useState(['paladin','whitemage','monk','bard']);
  
  const randomize = () => {
    const tank = getRandom(TankList);
    const healer = getRandom(HealerList);
    const dps1 = getRandom(DpsList);
    const dps2 = getRandom(DpsList);

    setJobs([tank, healer, dps1, dps2]);
  };

  const getRandom = (list: Array<any>) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const getColor = (job: string) => {
    if (TankList.includes(job)) {
      return 'sky';
    }

    if (HealerList.includes(job)) {
      return 'green';
    }

    if (DpsList.includes(job)) {
      return 'red';
    }

    return 'stone';
  };

  return (
    <div className="grid grid-cols-4 gap-2">

      {jobs.map((job, idx) => 
        <div key={idx} className="text-center bg-zinc-900 rounded-xl py-6">
          <span className={`text-${getColor(job)}-400`} >{ job }</span>
          <JobIconDisplay job={job}/>
        </div>
        )}

      <button
      onClick={randomize} 
      className="my-8 bg-zinc-800 text-green-200 p-2 rounded-lg col-start-2 col-end-4">Randomize</button>
    </div>
  )
}