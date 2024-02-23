import { useEffect, useState } from "react";
import { Footer, Header } from "../../components";
import { bannerApi } from "../../apis/bannerApi";
import { Banner } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { Pagination } from "swiper/modules";

export interface HomePageProps {}

const initBanners: Banner[] = [];

export function HomePage(props: HomePageProps) {
  const [listBanner, setListBanner] = useState(initBanners);

  useEffect(() => {
    (async () => {
      const { data } = await bannerApi.getAll();
      setListBanner([...listBanner, ...data]);
    })();
  }, []);

  return (
    <>
      <main>
        <div>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {listBanner.map((banner) => (
              <SwiperSlide key={banner.id}>
                <img src={`${banner.bannerImage}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
}
