import { Image } from '../../constants'

const SubNav = () => {
  return (
    <div className='flex text-center items-center justify-center gap-[5.5rem] mt-52 font-medium text-[.70rem] text-gray-700'>
      <span>
        <img className='w-14 cursor-pointer' src={Image.Img6} alt="smartwatch" />
        <span>ساعت هوشمند</span>
      </span>

      <span>
        <img className='w-14 cursor-pointer' src={Image.Img19} alt="headphone" />
        <span>هندزفری</span>
      </span>

      <span>
        <img className='w-14 cursor-pointer' src={Image.Img17} alt="powerbank" />
        <span>پاوربانک</span>
      </span>

      <span>
	  	<img className='w-14 cursor-pointer' src={Image.Tablet} alt="tablet" />
		    <span>تبلت</span>
      </span>

      <span>
	  	  <img className='w-14 cursor-pointer' src={Image.Img11} alt="laptop" />
		    <span>لپتاپ</span>
      </span>

      <span>
	  	  <img className='w-14 cursor-pointer' src={Image.Img10} alt="computer" />
		    <span>قطعات کامپیوتر</span>
      </span>

      <span>
	  	  <img className='w-14 cursor-pointer' src={Image.Img18} alt="stuffts" />
		    <span>جانبی موبایل</span>
      </span>

      <span>
	  	  <img className='w-14 cursor-pointer' src={Image.Img7} alt="phone" />
		    <span>گوشی موبایل</span>
      </span>
    </div>
  )
}

export default SubNav