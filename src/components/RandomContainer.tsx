import { useState } from 'react';
import DpsList from '../util/DpsList';
import HealerList from '../util/HealerList';
import TankList from '../util/TankList';
import JobIconDisplay from './JobIconDisplay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RandomContainer() {
  const [intervalConst, setIntervalConst] = useState(-1);
  const [jobs, setJobs] = useState(['paladin', 'whitemage', 'monk', 'bard']);

  const randomize = () => {
    if (intervalConst !== -1) {
      clearInterval(intervalConst);
      setIntervalConst(-1);
      toast.success('Sann', {
        autoClose: 1000,
        theme: 'dark'
      });
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

  const getRandom = getRandomJobFn();

  const getColor = getRoleColor();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jobs.join(', '));
    toast.success('Classes copied to clipboard', {
      autoClose: 1000,
      theme: 'dark'
    });
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {jobs.map((job, idx) => (
        <div key={idx} className="text-center bg-zinc-900 rounded-xl py-6">
          <span className={getColor(job)}>{job}</span>
          <JobIconDisplay job={job} />
        </div>
      ))}

      <ToastContainer />
      <button
        onClick={randomize}
        className="my-8 bg-zinc-800 text-green-200 text-2xl hover:bg-stone-600 py-4 px-2 rounded-lg col-start-1 col-end-5">
        {intervalConst !== -1 ? 'Click to stop' : 'Randomize'}
      </button>
      <button
        onClick={copyToClipboard}
        className="my-8 bg-zinc-800 text-green-200 hover:bg-stone-600 p-2 col-span-2 rounded-lg">
        Copy To Clipboard
      </button>
    </div>
  );
}

export function getRandomJobFn() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (list: Array<any>) => {
    return list[Math.floor(Math.random() * list.length)];
  };
}

export function getRoleColor() {
  return (job: string) => {
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
}
