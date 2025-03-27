import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Upper() {
    return (
        <div>
            <h2 id="about" className="mt-4 text-2xl text-center text-green-700 max-w-[1700px] font-serif md:text-4xl">
                <u>Weekly Featured Plants</u>
            </h2>

            {/* Swiper Carousel with dynamic height */}
            <div className="max-w-5xl mx-auto mt-4">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="rounded-lg"
                >
                    <SwiperSlide>
                        <div className="w-56 mx-auto sm:w-64 sm:h-55 md:w-72 md:h-60 lg:w-80 lg:h-72 xl:w-96 xl:h-80">
                            <img
                                src="/images/a.png"
                                className="object-cover w-full h-full rounded-lg"
                                alt="Plant A"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-56 mx-auto sm:w-64 sm:h-55 md:w-72 md:h-60 lg:w-80 lg:h-72 xl:w-96 xl:h-80">
                            <img
                                src="/images/B.png"
                                className="object-cover w-full h-full rounded-lg"
                                alt="Plant B"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-56 mx-auto sm:w-64 sm:h-55 md:w-72 md:h-60 lg:w-80 lg:h-72 xl:w-96 xl:h-80">
                            <img
                                src="/images/C.png"
                                className="object-cover w-full h-full rounded-lg"
                                alt="Plant C"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-56 mx-auto sm:w-64 sm:h-55 md:w-72 md:h-60 lg:w-80 lg:h-72 xl:w-96 xl:h-80">
                            <img
                                src="/images/D.png"
                                className="object-cover w-full h-full rounded-lg"
                                alt="Plant D"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-56 mx-auto sm:w-64 sm:h-55 md:w-72 md:h-60 lg:w-80 lg:h-72 xl:w-96 xl:h-80">
                            <img
                                src="/images/E.png"
                                className="object-cover w-full h-full rounded-lg"
                                alt="Plant E"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* About Us Section with id */}
            <div className="p-4 mx-2 mt-4 mb-4 text-center bg-green-100 border-2 border-green-700 rounded-lg shadow-md sm:p-6 md:p-8 sm:mx-4 md:mx-8">
                <h2 className="text-3xl font-semibold text-green-700 sm:text-4xl md:text-5xl">About Us</h2>
                <p className="px-4 mt-4 text-base text-gray-700 sm:px-6 md:px-10 sm:text-lg">
                    Welcome to our plant store! We are passionate about bringing nature closer to you. 
                    Our mission is to provide high-quality plants that enhance your home and garden. We 
                    offer a diverse selection of plants, from low-maintenance indoor greenery to vibrant outdoor varieties, along with expert care tips and accessories to help you nurture them with ease. Whether you're a seasoned plant enthusiast or just starting, our team is here to guide you in choosing the perfect plants for your space. 
                    Explore our collection and discover the beauty of greenery.
                </p>
            </div>

        </div>
    );
}
