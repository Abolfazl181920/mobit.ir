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
      <Homecmp.ScrollTopButton />
    </div>
  )
}

export default Home