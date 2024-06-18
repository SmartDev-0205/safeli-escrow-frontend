import { Helmet } from 'react-helmet-async';

import { MileStonesView } from '@/sections/milestones/view';

// ----------------------------------------------------------------------

export default function Milestones() {
  return (
    <>
      <Helmet>
        <title> Milestones | Safeli Escrow </title>
      </Helmet>

      <MileStonesView />
    </>
  );
}
