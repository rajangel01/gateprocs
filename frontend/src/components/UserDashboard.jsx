import React from 'react'
import { Link } from 'react-router-dom'
// import Tests from './Tests'

const UserDashboard = () => {
  return (
    <div>
      <h3 className='text-center'>Dashboard</h3>
      <div className="container"><Link to='/tests'>Attempt Test</Link> </div>
      <div className="container">Today's Leaderboard</div>
      <div className="container">Monthly Leaderboard</div>
      <div className="container">All Time Leaderboard</div>
      <div className="container">Profile</div>
      <div className="container">History</div>
    </div>
  )
}

export default UserDashboard
