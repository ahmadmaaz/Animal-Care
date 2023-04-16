import React from 'react'
import NavbarElem from '../../shared/Navbar'
import MainScreen from './components/MainScreen/index'
import FeaturedPets from './components/FeaturedPets'
import AdoptionStories from './components/AdoptionStories'
import AboutUsBanner from './components/AboutUsBannner'
import ActionCards from './components/ActionCards'
type Props = {}

function HomePage({}: Props) {
  return (
    <div>
        <NavbarElem />
        <MainScreen />
        <FeaturedPets />
        <AboutUsBanner />
        <AdoptionStories />
        <ActionCards />
    </div>
  )
}

export default HomePage