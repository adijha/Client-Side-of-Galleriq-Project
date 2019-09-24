import React from 'react'

export default function NewsLetter() {
  return (
    <div className="col-sm-4" >
    <form action style={{ background: "#ff9900", height: "170px"  , padding: '1rem'}}>
      <h3 style={{ color: "#fff" }}>STAY IN TOUCH WITH GALLERIQ</h3>
      <input
        type="text"
        className="subscribe-input"
        placeholder="Enter Email Address"
        style={{ marginTop: '1rem'}}
      />
      <button type="submit" className="btn btn-default subscribe" style={{ marginTop: '2rem'}}>
        SUBSCRIBE
      </button>
    </form>
  </div>
  )
}
