import { Image } from "../../constants"

const CommercialBanners = () => {
  return (
    <div className="flex justify-center flex-row-reverse gap-x-5">
        <img className="w-72 rounded-xl cursor-pointer" src={Image.Img34} alt="" />
        <img className="w-72 rounded-xl cursor-pointer" src={Image.Img35} alt="" />
        <img className="w-72 rounded-xl cursor-pointer" src={Image.Img36} alt="" />
        <img className="w-72 rounded-xl cursor-pointer" src={Image.Img37} alt="" />
    </div>
  )
}

export default CommercialBanners