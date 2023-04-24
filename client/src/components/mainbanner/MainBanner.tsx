import { Image } from "../../constants"

const MainBanner = () => {
  return (
    <div className="flex justify-center gap-x-3">
        <img className="w-[600px]" src={Image.Img40} alt="leftbanner" />
        <img className="w-[600px]" src={Image.Img39} alt="rightbanner" />
    </div>
  )
}

export default MainBanner