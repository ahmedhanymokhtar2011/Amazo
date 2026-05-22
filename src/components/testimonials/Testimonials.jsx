import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Virat Kohli",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Sachin Tendulkar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];
const Testimonials = () => {
    return (
        <div className='py-10 mb-10'>
            <div className='container'>
                {/*header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto '>
                    <p className='text-sm text-primary'>What our customers are saying</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia magnam deserunt corrupti.</p>
                </div>

                {/*Testimonials cards*/}

                <div
                data-aos="zoom-in"
                >
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {

                            TestimonialData.map((data) => (
                                <div className='my-6'>
                                    <SwiperSlide key={data.id} >
                                        <div
                                            className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800
                                        bg-primary/10 relative '
                                        >
                                            <div className='mb-4'>
                                                <img src={data.img} alt=""
                                                    className='rounded-full w-20 h-20' />
                                            </div>
                                            <div className='flex flex-col items-center gap-4'>
                                                <div className='space-y-3'>
                                                    <p
                                                        className='text-xs text-gray-400'
                                                    >{data.text}</p>
                                                    <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}
                                                    </h1>

                                                </div>
                                            </div>
                                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                        </div>

                                    </SwiperSlide>
                                </div>
                            ))
                        }



                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
