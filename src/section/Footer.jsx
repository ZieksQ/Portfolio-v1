import React from 'react'

function Footer() {
  return (
    <footer className={`bg-gray-900`}>
      <div className={`h-25 lg:max-w-screen-lg mx-auto text-white flex items-center justify-center`}>
        <p className={`text-medium`}>&copy;{new Date().getFullYear()} ZieksQ. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer