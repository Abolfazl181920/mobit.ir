import { Image } from '../../constants'
import Slider from './Slider'

const Nav = () => {
  return (
    <div className='flex mt-5 justify-evenly'>
    	<img className='w-48 relative left-6 rounded-md' src={Image.Img65} alt="leftbanner" />
    	<Slider />
        <img className='w-48 relative right-6 rounded-md' src={Image.Img62} alt="rightbanner" />
    </div>
  )
}

export default Nav