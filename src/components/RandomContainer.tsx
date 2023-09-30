import { useState } from "react";
import JobIconDisplay from "./JobIconDisplay";
import TankList from "../util/TankList";
import HealerList from "../util/HealerList";
import DpsList from "../util/DpsList";

export default function RandomContainer() {
  const [intervalConst, setIntervalConst] = useState(-1);
  const [jobs, setJobs] = useState(['paladin','whitemage','monk','bard']);
  
  const randomize = () => {
    if (intervalConst !== -1) {
      clearInterval(intervalConst);
      setIntervalConst(-1);
    } else {
      const a = setInterval(() => {
        const tank = getRandom(TankList);
        const healer = getRandom(HealerList);
        const dps1 = getRandom(DpsList);
        const dps2 = getRandom(DpsList);
  
        setJobs([tank, healer, dps1, dps2]);
      }, 24);
      setIntervalConst(a);
    }

  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getRandom = (list: Array<any>) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const getColor = (job: string) => {
    if (TankList.includes(job)) {
      return 'text-sky-400';
    }

    if (HealerList.includes(job)) {
      return 'text-green-400';
    }

    if (DpsList.includes(job)) {
      return 'text-red-400';
    }

    return 'text-slate-400';
  };

  return (
    <div className="grid grid-cols-4 gap-2">

      {jobs.map((job, idx) => 
        <div key={idx} className="text-center bg-zinc-900 rounded-xl py-6">
          <span className={getColor(job)} >{ job }</span>
          <JobIconDisplay job={job}/>
        </div>
        )}

      <button onClick={randomize} className="my-8 bg-zinc-800 text-green-200 p-2 rounded-lg col-start-2 col-end-4">
         {intervalConst !== -1 ? 'Click to stop' : 'Randomize'}
        </button>
    </div>
  )
}