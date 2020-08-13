import React from 'react';
import countries from '../../countries.json';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CountryDetail = (props) => {
  const Countries = countries;

  const countryId = props.match.params.cca3;

  let getCountry = (countryId) =>
    Countries.find((obj) => obj.cca3 === countryId);

  const foundCountry = getCountry(countryId);

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((eachBorder, index) => {
                  let border = Countries.find((obj) => obj.cca3 === eachBorder);
                  return (
                    <li key={uuidv4()}>
                      <Link to={border.cca3}>{border.name.common}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
