import { Homecmp } from '../constants'

const Home = () => {
  return (
    <div>
      <Homecmp.Header />
      <Homecmp.Nav />
      <Homecmp.SubNav />
      <Homecmp.OfferBanner />
      <Homecmp.MainBanner />
    </div>
  )
}

export default Home