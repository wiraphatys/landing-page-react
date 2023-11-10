import React from 'react'
import './MyHeader.css'

function MyHeader() {
  return (
    <>
        <div className='my-img'>
            {/* <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid title-img" /> */}
        </div>
        <div className="centered">
            <h1 className='title'>Where Ideas Become Websites</h1>
            <p className='content'>encapsulates our mission. We're the catalyst for your digital vision, bringing creativity to life through code. Our team transforms your unique ideas into fully functional, visually appealing websites, turning concepts into online reality. Experience innovation, design, and functionality converge seamlessly on your virtual canvas with us.</p>
        </div>
    </>
  )
}

export default MyHeader