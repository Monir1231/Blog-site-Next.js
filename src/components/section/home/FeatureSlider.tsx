"use client"

import { IArticle } from '@/models/Article'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination ,Autoplay} from 'swiper/modules';
import SwperCard from './SwperCard';




interface FeatureSliderProps{
    article:IArticle[]
}

const FeatureSlider = ({article}:FeatureSliderProps) => {
  return (
    <section className=' mb-24 py-12 text-gray-800'>
        <div className=' px-4 sm:px-6 lg:px-8'>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay:5000,
          disableOnInteraction:false
        }}

       loop={true}
        breakpoints={{
         
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        
        }}
        modules={[Pagination,Autoplay]}
        className=" rounded-xl"
      >

        {article.map((article)=>(
         <SwiperSlide key={article._id}>
          <SwperCard article={article} />
         </SwiperSlide>
        ))}
       
       
      </Swiper>
        </div>
    </section>
  )
}

export default FeatureSlider