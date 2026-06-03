import React from 'react'
import { Link } from 'react-router-dom'
// import Tests from './Tests'

const UserDashboard = () => {
  return (
    <div>
      <h3 className='text-center'>Dashboard</h3>
      <Link to='/tests'><div className="container">Attempt Test</div></Link> 
      <div className="container">Today's Leaderboard</div>
      <div className="container">Monthly Leaderboard</div>
      <div className="container">All Time Leaderboard</div>
      <Link to='/user-profile'><div className="container">Profile</div></Link> 
      <div className="container">History</div>
    </div>
  )
}

export default UserDashboard
