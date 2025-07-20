import type { InferEntrySchema } from "astro:content";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
interface Props {
  items: InferEntrySchema<"opinions">[];
  firstIndex?: number;
}
import Stars from "@assets/img/stars.svg?react";
import { useEffect, useRef } from "react";

export default ({ items, firstIndex = 0 }: Props) => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (!swiperRef.current) return;
  }, [swiperRef]);

  const onNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };
  const onPrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        initialSlide={firstIndex}
        centeredSlides={true}
        loop
        allowSlideNext
        allowSlidePrev
        allowTouchMove
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="max-w-[90%] relative"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Slide item={item} i={i} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button
        className="text-xl sm:text-2xl lg:text-3xl absolute w-8 sm:w-9 lg:w-10 left-0 translate-x-[-50%] sm:translate-x-[-75%] top-[50%] z-20 bg-white text-align rounded-2xl sm:rounded-4xl text-primary cursor-pointer aspect-square hidden sm:flex items-center justify-center"
        onClick={onPrev}
      >
        &lt;
      </button>
      <button
        className="text-xl sm:text-2xl lg:text-3xl absolute w-8 sm:w-9 lg:w-10 right-0 translate-x-[50%] sm:translate-x-[75%] top-[50%] z-20 bg-white text-align rounded-2xl sm:rounded-4xl text-primary cursor-pointer aspect-square hidden sm:flex items-center justify-center"
        onClick={onNext}
      >
        &gt;
      </button>
    </div>
  );
};

interface SlideProps {
  item: InferEntrySchema<"opinions">;
  i: number;
}

const Slide = ({ item, i }: SlideProps) => {
  const slide = useSwiperSlide();
  const swiper = useSwiper();

  return (
    <div
      role="button"
      className={`transition-all duration-300 rounded-xl cursor-pointer mt-6 sm:mt-8 lg:mt-10
              ${
                slide.isActive
                  ? "scale-100 border border-primary bg-secondary z-10 text-primary-text"
                  : "scale-90 border border-quaternary bg-white text-secondary"
              }
            `}
      onClick={(e) => swiper.slideToLoop(i)}
    >
      <div className="flex justify-left items-stretch gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-4">
        <div className="relative min-w-[80px] sm:min-w-[90px] lg:min-w-[100px]">
          <img
            src={item.image.src}
            alt={`Profile picture of ${item.username}`}
            className="rounded-xl w-[80px] sm:w-[90px] lg:w-[100px] aspect-square align-bottom absolute top-[-100%] left-0"
          />
        </div>
        <div className="text-center font-semibold text-sm sm:text-base">
          {item.name} <br />
          {item.username}
        </div>
      </div>
      <div
        className={`border-t-1 p-4 ${
          slide.isActive ? "border-primary" : "border-quaternary"
        }`}
      >
        <span>“{item.testimonial}”</span>

        <Stars
          color={
            slide.isActive ? "var(--color-primary)" : "var(--color-quaternary)"
          }
          className="transition-colors mt-4 max-w-[50%]"
        />
      </div>
    </div>
  );
};
