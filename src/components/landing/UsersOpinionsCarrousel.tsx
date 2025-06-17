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
        slidesPerView={3}
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
        className="text-3xl absolute w-10 block left-0 translate-x-[-75%] top-[50%] z-20 bg-white text-align rounded-4xl text-primary cursor-pointer aspect-square"
        onClick={onPrev}
      >
        &lt;
      </button>
      <button
        className="text-3xl absolute w-10 block right-0 translate-x-[75%] top-[50%] z-20 bg-white text-align rounded-4xl text-primary cursor-pointer aspect-square"
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
      className={`transition-all duration-300 rounded-xl cursor-pointer mt-10
              ${
                slide.isActive
                  ? "scale-100 border border-primary bg-secondary z-10 text-primary-text"
                  : "scale-90 border border-quaternary bg-white text-secondary"
              }
            `}
      onClick={(e) => swiper.slideToLoop(i)}
    >
      <div className="flex justify-left items-stretch gap-5 p-4">
        <div className="relative min-w-[100px]">
          <img
            src={item.image.src}
            alt={`Profile picture of ${item.username}`}
            className="rounded-xl w-[100px] aspect-square align-bottom absolute top-[-100%] left-0"
          />
        </div>
        <div className="text-center font-semibold">
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
