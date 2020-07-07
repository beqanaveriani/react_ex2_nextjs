import React from 'react';
import Countries from "./countries/Countries"

const Dashboard = ({ data, countriesData, historicalData }) =>
	(
		<div>
			<h1 id="stayhome">#STAYHOME</h1>
			<div className="summary">
				<div className="summary-child total">
					<h3>Total cases : {data.cases}</h3>
				</div>
				<div className="summary-child total-today">
					<h3>Total cases today : {data.todayCases}</h3>
				</div >
				<div className="summary-child total-death">
					<h3>Total death : {data.deaths}</h3>
				</div>
				<div className="summary-child total-recovered">
					<h3>Total recovered : {data.recovered}</h3>
				</div>
				<div className="summary-child total-active">
					<h3>Total active : {data.active}</h3>
				</div>
			</div>
			<Countries countriesData={countriesData} historicalData={historicalData} />
		</div>
	);




export default Dashboard;