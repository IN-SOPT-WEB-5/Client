import BoxOffice from './BoxOffice';
import Benefits from './Benefits';
import Curation from './Curation';
import Guide from './Guide';
import LandingNav from '../@common/LandingNav';

export default function Landingpage() {
  return (
    <>
      <LandingNav />
      <BoxOffice />
      <Benefits />
      <Curation />
      <Guide />
    </>
  );
}
