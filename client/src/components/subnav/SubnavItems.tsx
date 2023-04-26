import { Image } from '../../constants'

const SubnavItems = () => {
  return (
    <>
        <span>
        <img className='subnavitem' src={Image.Img6} alt="smartwatch" />
        <span>ساعت هوشمند</span>
      </span>

      <span>
        <img className='subnavitem' src={Image.Img19} alt="headphone" />
        <span>هندزفری</span>
      </span>

      <span>
        <img className='subnavitem' src={Image.Img17} alt="powerbank" />
        <span>پاوربانک</span>
      </span>

      <span>
	  	<img className='subnavitem' src={Image.Tablet} alt="tablet" />
		    <span>تبلت</span>
      </span>

      <span>
	  	  <img className='subnavitem' src={Image.Img11} alt="laptop" />
		    <span>لپتاپ</span>
      </span>

      <span>
	  	  <img className='subnavitem' src={Image.Img10} alt="computer" />
		    <span>قطعات کامپیوتر</span>
      </span>

      <span>
	  	  <img className='subnavitem' src={Image.Img18} alt="stuffts" />
		    <span>جانبی موبایل</span>
      </span>

      <span>
	  	  <img className='subnavitem' src={Image.Img7} alt="phone" />
		    <span>گوشی موبایل</span>
      </span>
    </>
  )
}

export default SubnavItems