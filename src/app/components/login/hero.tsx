"use client";

import Image from "next/image";
import { useEffect, useCallback, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTheme } from "next-themes";
import Fade from "embla-carousel-fade";

const loginMock = [
  {
    logo_dark:
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728318129/Logo_green_utcwhe.svg",
    logo: "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319326/logo_ryrcmi.svg",
    bg: (
      <Image
        src={
          "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319294/login_1_u7cvwm.png"
        }
        priority
        quality={75}
        alt="Background"
        fill
        className="!object-cover"
      />
    ),
    title: "Simpplify | EAM",
    msg: "Gerencie todo o ciclo de vida dos seus ativos com eficiência. Automatize manutenções, reduza custos e maximize a performance dos seus equipamentos em uma única plataforma.",
  },
  {
    logo_dark:
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728318129/Logo_green_utcwhe.svg",
    logo: "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319326/logo_ryrcmi.svg",
    bg: (
      <Image
        src={
          "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319293/login_2_k4k7dl.png"
        }
        priority
        quality={75}
        alt="Background"
        fill
        className="!object-cover"
      />
    ),
    title: "Simpplify | HCM",
    msg: "Gerencie seu capital humano com eficiência. Automatize processos de recrutamento, avaliação de desempenho e desenvolvimento de talentos, alinhando sua equipe às metas da empresa.",
  },
  {
    logo_dark:
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728318129/Logo_green_utcwhe.svg",
    logo: "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319326/logo_ryrcmi.svg",
    bg: (
      <Image
        src={
          "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319292/login_3_ghtb80.png"
        }
        priority
        quality={75}
        alt="Background"
        fill
        className="!object-cover"
      />
    ),
    title: "Simpplify | EQM",
    msg: "Garanta a qualidade em todos os processos da sua empresa. Automatize auditorias, controle não conformidades e assegure a conformidade com normas e padrões de excelência.",
  },
  {
    logo_dark:
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728318129/Logo_red_ryctha.svg",
    logo: "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319320/logo_red_dqug1i.svg",
    bg: (
      <Image
        src={
          "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319293/login_4_v9d6l0.png"
        }
        priority
        quality={75}
        alt="Background"
        fill
        className="!object-cover"
      />
    ),
    title: "Simpplify | Routes",
    msg: "Otimize suas rotas logísticas em tempo real. Planeje entregas com eficiência, reduza custos de transporte e acompanhe o desempenho da sua frota em uma única plataforma.",
  },
  {
    logo_dark:
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728318129/Logo_orange_fkbhen.svg",
    logo: "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319323/logo_copper_rtohjw.svg",
    bg: (
      <Image
        src={
          "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319296/login_5_x01z5m.png"
        }
        priority
        quality={75}
        alt="Background"
        fill
        className="!object-cover"
      />
    ),
    title: "Simpplify | MarketHub",
    msg: "Conecte sua empresa com parceiros e fornecedores estratégicos. Centralize negociações, simplifique a gestão de contratos e expanda suas oportunidades de mercado em uma plataforma integrada.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
    },
    [Fade()]
  );

  const { theme } = useTheme();

  const logoElement = useMemo(
    () =>
      theme === "dark" ? loginMock[index].logo_dark : loginMock[index].logo,
    [theme, index]
  );

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      setIndex((i) => (i + 1) % loginMock.length);
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [scrollNext]);

  return (
    <div className="hidden md:flex md:w-[90%] md:-mr-4 h-full items-center justify-center">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {loginMock.map((img, idx) => (
            <div className="flex justify-center embla__slide" key={idx}>
              <div className="object-cover !size-full rounded-l-md">
                {loginMock[idx].bg}
              </div>
              <div className="hidden md:flex absolute bottom-0 mb-10 p-[16px] w-[80%] left-[10%] min-h-[140px] ">
                <div className="absolute inset-0 bg-themeModais rounded-md "></div>
                <div className="relative flex flex-col items-start">
                  <div className="relative flex flex-row items-center gap-[10px]">
                    <div className="object-scale-down">
                      <Image
                        alt="logo"
                        quality={75}
                        priority
                        width={40}
                        height={40}
                        src={logoElement}
                      />
                    </div>
                    <span className="lg:text-[24px] sm:text-[15px] text-themeFontsPrimary font-semibold">
                      {loginMock[idx].title}
                    </span>
                  </div>
                  <span className="lg:text-[16px] mt-[10px] sm:text-[12px] text-themeFontsPrimary">
                    {loginMock[idx].msg}
                  </span>
                  <div className="flex items-center gap-1 mt-2">
                    {loginMock.map((_, i) => {
                      let bgColor = "bg-[#D9D9D9]";

                      if (i === index) {
                        if (i <= 2) {
                          bgColor = "bg-themeGreen";
                        } else if (i === 3) {
                          bgColor = "bg-[#C72D2D]";
                        } else if (i === 4) {
                          bgColor = "bg-[#D2710F]";
                        }
                      }

                      return (
                        <div
                          key={i}
                          className={`h-2 rounded-lg transition-all duration-500 ease-in-out  ${
                            i === index ? `w-8 ${bgColor}` : "w-4 bg-[#D9D9D9]"
                          }`}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
