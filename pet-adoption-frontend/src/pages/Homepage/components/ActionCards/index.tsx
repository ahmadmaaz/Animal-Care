import React from 'react'

import VolunteerCard from './components/VolunteerCard'
import AdoptCard from './components/AdoptCard'
import DonateCard from './components/DonateCard'

type Props = {}

function ActionCards({}: Props) {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center my-24 gap-12 px-8'>
        <DonateCard />
        <VolunteerCard />
        <AdoptCard />
    </div>
  )
}

export default ActionCards