import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Banners } from "../../../types";

// import required modules

export interface SlideProps {
  data: Banners | undefined;
}

export function Slide({ data }: SlideProps) {
  const { data: listBanner }: any = data;

  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {listBanner.map((banner: any) => (
          <SwiperSlide key={banner.id}>
            <img src={`${banner.bannerImage}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
