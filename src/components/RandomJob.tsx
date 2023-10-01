import DpsList from '../util/DpsList';
import HealerList from '../util/HealerList';
import TankList from '../util/TankList';
import JobIconDisplay from './JobIconDisplay';
import { getRandomJobFn, getRoleColor } from './RandomContainer';

export default function RandomJob() {
  const jobFn = getRandomJobFn();
  const colorFn = getRoleColor();

  const job = jobFn(TankList.concat(HealerList.concat(DpsList)));

  return (
    <div className="grid grid-cols-4 gap-2 justify-items-center">
      <div className="text-center bg-zinc-900 rounded-xl p-6 col-span-2 col-start-2">
        <span className={colorFn(job)}>{job}</span>
        <JobIconDisplay job={job} />
      </div>
    </div>
  );
}
