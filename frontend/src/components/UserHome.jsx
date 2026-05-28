import React from 'react'

const UserHome = () => {
  const userData = JSON.parse(localStorage.getItem("isLoggedIn"))
  return (
    <div>
      <div className="container">
        <h4>Welcome Back {userData.name}</h4>
      </div>
      
      {/* Welcome Message  */}
      {/* Performance Graph  */}
      {/* Leaderboard  */}
      {/* Your Rank  */}
    </div>
  )
}

export default UserHome
