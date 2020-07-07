import React, { useState } from "react"
import CountryModal from "./CountryModal"

const Country = ({ country, history }) => {
	const [modal, setModal] = useState(false)

	console.log(modal)
	return (
		<tr name={country.countryInfo.iso2} onClick={() => setModal(prev => !prev)}>
			<td><img src={country.countryInfo.flag} alt="flag"></img></td>
			<td>{country.continent}</td>
			<td>{country.country}</td>
			<td>{country.cases}</td>
			<td>{country.active}</td>
			<td>{country.deaths}</td>
			<td style={{ color: "#1dd1a1" }}>+ {country.recovered}</td>
			<td>{country.todayCases}</td>
			<td style={{ color: "#ff6b6b" }}>- {country.todayDeaths}</td>
			<td><button className="showModal">Show</button>
				<CountryModal onClose={() => setModal(prev => !prev)} show={modal} country={country.countryInfo.iso2} key={country.countryInfo.iso3} history={history} /></td>
		</tr>
	);

}

export default Country;