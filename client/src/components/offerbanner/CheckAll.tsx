import { ArrowleftIcon } from '../../assets/icons'

const CheckAll = () => {
  return (
    <span className='flex flex-row-reverse items-center cursor-pointer'>
        <span>مشاهده همه</span>
        <span className='relative top-[19px] left-5'>
            <ArrowleftIcon />
        </span>
    </span>
  )
}

export default CheckAll