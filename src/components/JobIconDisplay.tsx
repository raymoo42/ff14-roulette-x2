import Astro from "./jobIcons/Astro";
import Bard from "./jobIcons/Bard";
import Blackmage from "./jobIcons/Blackmage";
import Dancer from "./jobIcons/Dancer";
import DarkKnight from "./jobIcons/DarkKnight";
import Dragoon from "./jobIcons/Dragoon";
import Dummy from "./jobIcons/Dummy";
import Gunbreaker from "./jobIcons/Gunbreaker";
import Machinist from "./jobIcons/Machinist";
import Monk from "./jobIcons/Monk";
import Ninja from "./jobIcons/Ninja";
import Paladin from "./jobIcons/Paladin";
import Reaper from "./jobIcons/Reaper";
import Redmage from "./jobIcons/Redmage";
import Sage from "./jobIcons/Sage";
import Samurai from "./jobIcons/Samurai";
import Scholar from "./jobIcons/Scholar";
import Summoner from "./jobIcons/Summoner";
import Warrior from "./jobIcons/Warrior";
import Whitemage from "./jobIcons/Whitemage";

export default function JobIconDisplay(props: {job: string}) {
  const classToIconMap = {
    'sage': Sage,
    'reaper': Reaper,
    'dancer': Dancer,
    'gunbreaker':Gunbreaker,
    'redmage': Redmage,
    'samurai': Samurai,
    'astrologian': Astro,
    'ninja': Ninja,
    'scholar': Scholar,
    'darkKnight': DarkKnight,
    'machinist': Machinist,
    'summoner': Summoner,
    'blackmage': Blackmage,
    'bard': Bard,
    'dragoon': Dragoon,
    'warrior': Warrior,
    'monk': Monk,
    'paladin': Paladin,
    'whitemage': Whitemage,
  };

  const MyComponent = classToIconMap[props.job] ?? Dummy;

  return (
    <>
      <MyComponent />
    </>
  )
}