import DpsList from '../util/DpsList';
import HealerList from '../util/HealerList';
import { getRandomJobFn, getRoleColor } from '../util/JobFunctions';
import TankList from '../util/TankList';
import JobIconDisplay from './JobIconDisplay';
import { useState } from 'react';

export default function RandomJob() {
  const jobFn = getRandomJobFn();
  const colorFn = getRoleColor();

  const [job, setJob] = useState(() => jobFn(TankList.concat(HealerList.concat(DpsList))));

  const selectAnyJob = () => {
    setJob(jobFn(TankList.concat(HealerList.concat(DpsList))));
  };

  return (
    <div className="grid grid-cols-1 gap-6 justify-items-center">
      <div className="text-center bg-zinc-900 rounded-xl p-6 min-w-1/4">
        <span className={colorFn(job)}>{job}</span>
        <JobIconDisplay job={job} />
      </div>
      <button
        className="bg-green-200 w-1/2 px-4 py-4 rounded-md cursor-pointer"
        onClick={selectAnyJob}>
        Reroll
      </button>
    </div>
  );
}
