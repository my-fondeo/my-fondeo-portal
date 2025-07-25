import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import { useRef } from "react";
import { ChallengeCardLanding } from "@components/landing/ChallengeCardLanding";
import { useProLanding } from "@core/landing/store/challengeType";

interface ChallengeCard {
  id: string;
  items: string[];
  popular?: boolean;
  isProCard: boolean;
}

const challengeCards: ChallengeCard[] = [
  {
    id: "standard",
    items: [
      "Evaluación tradicional",
      "Perdida máxima diaria",
      "Customizables",
      "Objetivo fase 2 más bajo",
    ],
    popular: true,
    isProCard: false,
  },
  {
    id: "pro",
    items: [
      "Sin perdida máxima diaria",
      "Limite beneficio diario",
      "Más asequibles",
      "Objetivo beneficio más bajo",
    ],
    popular: false,
    isProCard: true,
  },
];

export default function ChallengeCardsSwiper() {
  const swiperRef = useRef<any>(null);
  const { setEnabled } = useProLanding();

  const onNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };

  const onPrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  return (
    <div className="relative max-w-[90%] w-[90%]">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        initialSlide={0}
        centeredSlides={true}
        loop={false}
        allowTouchMove
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        style={{ padding: "20px 28px" }}
        className="px-4 sm:px-8 pt-16"
        
      >
        {challengeCards.map((card, i) => (
          <SwiperSlide key={card.id}>
            <ChallengeSlide card={card} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Navigation Buttons */}
      <button
        className="text-xl sm:text-2xl lg:text-3xl absolute w-10 sm:w-12 lg:w-14 left-0 translate-x-[-50%] sm:translate-x-[-75%] top-[50%] z-20 bg-white rounded-full text-primary cursor-pointer aspect-square hidden lg:flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        onClick={onPrev}
        aria-label="Anterior tarjeta"
      >
        &#8249;
      </button>
      <button
        className="text-xl sm:text-2xl lg:text-3xl absolute w-10 sm:w-12 lg:w-14 right-0 translate-x-[50%] sm:translate-x-[75%] top-[50%] z-20 bg-white rounded-full text-primary cursor-pointer aspect-square hidden lg:flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        onClick={onNext}
        aria-label="Siguiente tarjeta"
      >
        &#8250;
      </button>
    </div>
  );
}

interface ChallengeSlideProps {
  card: ChallengeCard;
  index: number;
}

const ChallengeSlide = ({ card, index }: ChallengeSlideProps) => {
  const slide = useSwiperSlide();
  const { setEnabled } = useProLanding();

  const handleCardChange = () => {
    setEnabled(card.isProCard);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        slide.isActive
          ? "scale-100 opacity-100"
          : "scale-90 sm:scale-95 opacity-75"
      }`}
    >
      <ChallengeCardLanding
        changeItem={handleCardChange}
        items={card.items}
        popular={card.popular}
      />
    </div>
  );
};
