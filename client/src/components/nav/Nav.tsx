import { Image } from '../../constants'

const Nav = () => {
  return (
    <div className='flex mt-5 justify-evenly'>
      <img className='w-48 rounded-md' src={Image.Img65} alt="leftbanner" />
      <img className='w-48 rounded-md' src={Image.Img62} alt="rightbanner" />
    </div>
  )
}

export default Nav