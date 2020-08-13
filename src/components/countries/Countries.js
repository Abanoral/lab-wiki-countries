import React from 'react'

const Countries = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              <a className="list-group-item list-group-item-action" href="/ABW"><span> 🇦🇼</span> Aruba</a>
              <a className="list-group-item list-group-item-action" href="/AFG"><span> 🇦🇫</span> Afghanistan</a>
              <a className="list-group-item list-group-item-action" href="/AGO"><span> 🇦🇴</span> Angola</a>
              <a className="list-group-item list-group-item-action" href="/AIA"><span> 🇦🇮</span> Anguilla</a>
              <a className="list-group-item list-group-item-action" href="/ALA"><span> 🇦🇽</span> Åland Islands</a>
              <a className="list-group-item list-group-item-action" href="/ALB"><span> 🇦🇱</span> Albania</a>
              <a className="list-group-item list-group-item-action" href="/AND"><span> 🇦🇩</span> Andorra</a>
              <a className="list-group-item list-group-item-action" href="/ARE"><span> 🇦🇪</span> United Arab Emirates</a>
              <a className="list-group-item list-group-item-action" href="/ARG"><span> 🇦🇷</span> Argentina</a>
              <a className="list-group-item list-group-item-action" href="/ARM"><span> 🇦🇲</span> Armenia</a>
              <a className="list-group-item list-group-item-action" href="/ASM"><span> 🇦🇸</span> American Samoa</a>
              <a className="list-group-item list-group-item-action" href="/ATA"><span> 🇦🇶</span> Antarctica</a>
              <a className="list-group-item list-group-item-action" href="/FLK"><span> 🇫🇰</span> Falkland Islands</a>
              <a className="list-group-item list-group-item-action active" href="/FRA"><span> 🇫🇷</span> France</a>
              <a className="list-group-item list-group-item-action" href="/ZWE"><span> 🇿🇼</span> Zimbabwe</a>
            </div>
          </div>
          <div className="col-7">
            <h1>France</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countries
