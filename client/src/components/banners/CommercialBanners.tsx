import { Image } from "../../constants"

const CommercialBanners = () => {
  return (
    <div className="flex justify-center flex-row-reverse gap-x-5">
        <img className="commerbannerimg" src={Image.Img34} alt="firstcommercialimg" />
        <img className="commerbannerimg" src={Image.Img35} alt="secondcommercialimg" />
        <img className="commerbannerimg" src={Image.Img36} alt="thirdcommercialimg" />
        <img className="commerbannerimg" src={Image.Img37} alt="fourthcommercialimg" />
    </div>
  )
}

export default CommercialBanners