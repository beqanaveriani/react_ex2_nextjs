import React from 'react';
import Country from "./Country"


const collectHistory = (data) => {
	let newData = {};

	for (let i = 0; i < data.length; i++) {
		let tmp = data[i];
		if (!(tmp.country in newData)) {
			newData[tmp.country] = [];
		}

		for (const key of Object.keys(tmp.timeline.cases)) {
			newData[tmp.country].push({ province: tmp.province !== null ? tmp.province : "N/A", date: `${key}`, cases: tmp.timeline.cases[`${key}`], deaths: tmp.timeline.deaths[`${key}`], recovered: tmp.timeline.recovered[`${key}`] })
		}
	}

	return newData;
}


const Countries = ({ countriesData, historicalData }) => {

	const data = countriesData.sort((a, b) => (a.cases < b.cases) ? 1 : ((b.cases < a.cases) ? -1 : 0))
	const history = collectHistory(historicalData)

	return (
		<div>
			<table id="countries">
				<thead>
					<tr>
						<th>Flag</th>
						<th>Continent</th>
						<th>Country</th>
						<th>Cases</th>
						<th>Active cases</th>
						<th>Deaths</th>
						<th>Recovered</th>
						<th>Today cases</th>
						<th>Today deaths</th>
						<th>Details</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((item, key) => <Country country={item} key={key} history={history[item.country]} />)
					}
				</tbody>
			</table>
		</div>

	);

}


export default Countries
