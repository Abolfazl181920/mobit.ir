import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Image } from '../../constants'
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
        modules={[Autoplay, Pagination, Navigation]}
        className="hero_slider overflow-hidden rounded-xl"
      >
        <SwiperSlide style={{ width: '800px' }}>
            <div className="aspect-w-4 aspect-h-1 lg:aspect-w-4">
                <img src={Image.Img52} alt="slide1" />
                {/* <img src={Image.Img53} alt="slide2" />
                <img src={Image.Img54} alt="slide3" />
                <img src={Image.Img55} alt="slide4" /> */}
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Slider