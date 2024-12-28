import Hero from '@/app/__components/Hero'
import React, { Fragment } from 'react'
import SkyDive from './__components/SkyDive'

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <SkyDive/>
    </Fragment>
  )
}

export default HomePage