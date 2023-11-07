import './Forms.css'

import React from 'react'

const Forms = () => {
  return (
    <div className='forms'>
      <form>
        <label>Your Name</label>
        <input type="text" id="" />
        <label>Email</label>
        <input type="email" id="" />
        <label>Subject</label>
        <input type="text" id="" />
        <label>Message</label>
        <textarea rows='10'placeholder='Type Your Message Here.'/>
        <button className='btn'>Submit</button>
      </form>

    </div>
  )
}

export default Forms
