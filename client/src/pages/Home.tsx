import { Homecmp } from '../constants'

const Home = () => {
  return (
    <div>
      <Homecmp.Header />
      <Homecmp.Nav />
      <Homecmp.SubNav />
      <Homecmp.OfferBanner />
      <Homecmp.MainBanner />
      <Homecmp.SecureBanner />
      <Homecmp.CommercialBanners />
      <Homecmp.TechNews />
    </div>
  )
}

export default Home