import { Image } from "../../constants"

const TechNews = () => {
  return (
    <>
        {/* <h3 className="text-gray-800 relative left-96">اخبار تکنولوژی</h3> */}
        <div className="flex justify-center gap-3 mt-2">
            <img className="cursor-pointer w-72 rounded-md" src={Image.Img79} alt="news1" />
            <img className="cursor-pointer w-72 rounded-md" src={Image.Img84} alt="news2" />
            <img className="cursor-pointer w-72 rounded-md" src={Image.Img79} alt="news3" />
            <img className="cursor-pointer w-72 rounded-md" src={Image.Img84} alt="news4" />
        </div>
    </>
  )
}

export default TechNews