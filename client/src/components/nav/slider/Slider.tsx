import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Image } from '../../../constants'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './slider.css'

const Slider = () => {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[ Autoplay, Pagination, Navigation ]}
        className="hero_slider overflow-hidden rounded-xl w-[800px]"
      >
        <SwiperSlide>
            <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3">
                <img src={Image.Img52} alt="slide1" />
            </div>
        </SwiperSlide>

		<SwiperSlide>
            <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3">
                <img src={Image.Img53} alt="slide2" />
            </div>
        </SwiperSlide>

		<SwiperSlide>
            <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3">
                <img src={Image.Img54} alt="slide3" />
            </div>
        </SwiperSlide>

		<SwiperSlide>
            <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3">
                <img src={Image.Img55} alt="slide4" />
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Slider