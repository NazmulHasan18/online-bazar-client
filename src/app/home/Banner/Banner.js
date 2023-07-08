import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
   return (
      <>
         <Swiper
            pagination={{ clickable: true }}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            loop={Infinity}
            modules={[Pagination]}
            className="mySwiper"
         >
            <SwiperSlide>
               <Image
                  src="https://i.ibb.co/BfDNzDp/11461405-4739023.jpg"
                  alt=""
                  width={1200}
                  height={500}
                  className="w-full lg:max-h-screen"
               ></Image>
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  src="https://i.ibb.co/pLJ2dX3/13298131-5183406.jpg"
                  alt=""
                  width={1200}
                  height={500}
                  className="w-full lg:max-h-screen"
               ></Image>
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  src="https://i.ibb.co/NYKHV34/13209966-5183398.jpg"
                  alt=""
                  width={1200}
                  height={500}
                  className="w-full lg:max-h-screen"
               ></Image>
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default Banner;
