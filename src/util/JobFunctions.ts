import DpsList from './DpsList';
import HealerList from './HealerList';
import TankList from './TankList';

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
