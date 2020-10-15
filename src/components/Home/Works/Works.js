import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCube, Autoplay]);
const works = [
    {
        img:carousel1
    },
    {
        img:carousel2
    },
    {
        img:carousel3
    },
    {
        img:carousel4
    },
    {
        img:carousel5
    },
]
const Works = () => {
    return (
        <section className="bg-dark p-5">
            <h1 className="text-center text-white p-5">Here are some of <span style={{color:'#8ABB6D'}}>Our Works</span></h1>
         <Swiper
         style={{width:'900px',margin:'0 auto'}}
         spaceBetween={10}
        slidesPerView={2}
        loop={true}
        autoplay={true}
        
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
     {
         works.map(work => (
            <SwiperSlide><img  style={{width:'450px', height:'300px', padding:'30px'}} src={work.img} alt=""/></SwiperSlide>
         ))
     }
    </Swiper>
    </section>
    );
};

export default Works;