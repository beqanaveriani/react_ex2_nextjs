import Head from 'next/head'
import Dashboard from '../components/Dashboard'


const Home = ({data, countriesData, historicalData}) => {
  return (
    <div className="container">
      <Head>
        <title>Covid App with NextJs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard data={data} countriesData={countriesData} historicalData={historicalData} />
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://corona.lmao.ninja/v2/all')
  const data = await res.json()

  const countriesRes = await fetch('https://corona.lmao.ninja/v2/countries?sort=country')
  const countriesData = await countriesRes.json()

  const historicalRes = await fetch('https://corona.lmao.ninja/v2/historical')
  const historicalData = await historicalRes.json()

  return {
    props: {
      data,
      countriesData,
      historicalData
    },
  }
}

export default Home
