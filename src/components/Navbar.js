import React from 'react'

export default function Navbar(props) {
  return (
    <div>
  <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
  </div>
  <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={() => {props.toggleMode(null)}}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Mode === 'dark'?'Disable' : 'Enable'} Dark Mode</label>
        </div>
</nav>
    </div>
  )
}
