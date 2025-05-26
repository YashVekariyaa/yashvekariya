"use client";

import Link from "next/link";
import { CompanyInterface } from "@/config/contributions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface CompaniesCardProps {
  companies: CompanyInterface[];
  type?: "page";
}

export default function CompaniesCard({
  companies,
  type,
}: CompaniesCardProps) {
  return (
    <div className="gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {type !== "page" ? (
        <Link href="" target="_blank" >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="w-full"
          >
            {companies?.map((company, index) => (
              <div className="relative w-full rounded-lg p-2 hover:bg-accent hover:text-accent-foreground">
                <div
                  className="md:mt-12"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <SwiperSlide key={index} className="flex justify-center items-center rounded-lg w-full">
                    <div className="w-32 h-32 mx-auto md:w-40 md:h-40 flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-contain p-4 rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            ))}
          </Swiper>
        </Link>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies?.map((company, index) => (
            <div key={index} className="relative rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground">
              <div className="w-32 h-32 mx-auto md:w-40 md:h-40 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-contain p-4 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
