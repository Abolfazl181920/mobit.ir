import { ArrowleftIcon, ArrowrightIcon } from '../../assets/icons'

const OfferBanner = () => {
  return (
    <section className="flex text-white text-xs justify-center mt-7">
        <div className="w-[75.5rem] flex justify-between items-center h-14 bg-red-400 rounded-xl">
            <span className='flex flex-row-reverse items-center cursor-pointer'>
                <span>مشاهده همه</span>
                <span className='relative top-[19px] left-5'>
                    <ArrowleftIcon />
                </span>
            </span>
            
            <span className='flex items-center cursor-pointer'>
                <span className="px-4">پیشنهاد ویژه مبیت</span>
                <span className='relative top-[20px] left-5'>
                    <ArrowrightIcon />
                </span>
            </span>
        </div>
    </section>
  )
}

export default OfferBanner