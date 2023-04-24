import CheckAll from './CheckAll'
import MobitOffer from './MobitOffer'

const OfferBanner = () => {
  return (
    <section className="flex text-white text-xs justify-center mt-7">
        <div className="w-[75.5rem] flex justify-between items-center h-14 bg-red-400 rounded-xl">
            <CheckAll />
            <MobitOffer />
        </div>
    </section>
  )
}

export default OfferBanner