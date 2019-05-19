import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const Bio = props => {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={profilePic}
        alt={`Kyle Mathews`}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
        }}
      />
      <p>
        Written by <strong>Marty Penner</strong> who likes race cars, drums, and
        works in London, Ontario, Canada building useful things.{' '}
        <a href="https://twitter.com/MartyPenner">
          You should follow him on Twitter or something
        </a>
      </p>
    </div>
  )
}

export default Bio
