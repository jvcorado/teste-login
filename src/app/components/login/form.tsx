"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { InputCheckBoxUI } from "../InputNextUI/inputCheckBoxUI";
import { useTheme } from "next-themes";
import { InputUILogin } from "../InputNextUI/inputUILogin";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../loginButton";

const schema = z.object({
  email: z.string().min(1, "Usuário é obrigatório"),
  password: z.string().min(1, "Senha é obrigatória"),
  access_key: z.string().min(1, "A chave de acesso é obrigatória"),
});

type TypeInputs = z.infer<typeof schema>;

export default function FormLogin() {
  /*   const router = useRouter(); */
  const [index, setIndex] = useState(0);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TypeInputs>({
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  /*   const [loading, setLoading] = useState(false); */
  const { theme } = useTheme();

  const images = useMemo(
    () => [
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319315/logo_name_green_om9wyd.png",
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319315/logo_name_green_om9wyd.png",
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319315/logo_name_green_om9wyd.png",
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319301/logo_name_red_cmobjs.svg",
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728319314/logo_name_copper_kixaxs.svg",
    ],
    []
  );

  const imagesDark = useMemo(
    () => [
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728318129/Logo_green_dark_dhwkgj.svg",
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728318129/Logo_green_dark_dhwkgj.svg",
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728318129/Logo_green_dark_dhwkgj.svg",
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728318129/Logo_red_dark_sqtzyz.svg",
      "https://res.cloudinary.com/dbsdq1thq/image/upload/v1728318129/Logo_orange_dark_brdkx3.svg",
    ],
    []
  );

  const colors = useMemo(
    () => [
      { color: "#006C3E", gradient: "#01A05C" },
      { color: "#006C3E", gradient: "#01A05C" },
      { color: "#006C3E", gradient: "#01A05C" },
      { color: "#C72D2D", gradient: "#FF1A1A" },
      { color: "#D2710F", gradient: "#E78E35" },
    ],
    []
  );

  /*   const { setToken } = useAuthContext(); */

  const scrollNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [scrollNext]);

  /*   const onSubmit = async (data: TypeInputs) => {
    setLoading(true);
    const body = {
      email: data.email.toUpperCase(),
      password: data.password,
      access_key: Number(data.access_key),
    };

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (response.status === 200) {
      try {
        localStorage.setItem(
          "simpplify.user.isAdmin",
          JSON.stringify(result.data.role === "ADMIN")
        );
        localStorage.setItem("simpplify.token", result?.data?.token);

        if (result?.data?.first_access) {
          localStorage.setItem(
            "simpplify.first_access",
            result?.data?.first_access
          );
        }

        setToken(result?.data?.token);
        setAuthorization(result?.data?.token);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("Ocorreu uma falha no login", {
        description:
          response.status === 500
            ? "Usuário ou senha incorretos. Por favor, tente novamente."
            : "Ocorreu uma falha no login. Por favor, tente novamente.",
      });
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  }; */

  return (
    <form
      /*       onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }} */
      className="flex flex-col z-50 lg:w-[45%] xl:w-[40%] 2xl:w-[35%] md:flex-row md:w-[60%] justify-between overflow-y-auto h-full w-full shadow-2xl md:rounded-s-2xl bg-themeModais md:px-5 lg:px-10 xl:px-14 2xl:px-20"
    >
      <div
        /*         onKeyDown={handleKeyPress} */
        className="flex flex-col w-full h-[100%] md:h-[100%] mx-auto md:my-auto md:items-center md:justify-center md:pb-32"
      >
        <div className="flex z-50 md:z-auto bg-mobile-login items-center justify-center w-full">
          <div className="flex mb-20 md:mb-10 -ml-2 md:ml-0 items-center justify-center w-[250px] object-center">
            <Image
              priority
              quality={75}
              src={theme === "dark" ? imagesDark[index] : images[index]}
              alt={`Logo ${index + 1}`}
              width={250}
              height={250}
              className="w-full max-w-[300px] md:max-w-[350px]"
            />
          </div>
        </div>

        <div className="h-[100%] -mt-8 w-full px-10 md:px-0 flex flex-col gap-3 mx-auto pb-10 md:h-auto md:gap-4">
          <span className="flex md:hidden text-themeFontsPrimary text-start mx-2 font-bold text-[32px]">
            Login
          </span>
          <span className="hidden md:flex text-themeFontsPrimary text-start font-medium text-base">
            Faça login na sua conta
          </span>
          <div className="flex flex-col gap-4">
            <InputUILogin
              placeholder="Digite seu usuário aqui"
              name="email"
              control={control as never}
              error={errors}
              label="Usuário"
              required
              allUpperCase
            />
            <InputUILogin
              placeholder="Digite sua senha"
              name="password"
              error={errors}
              control={control as never}
              label="Senha"
              type="password"
              colourEye={{ color: colors[index].color }}
              required
              password
            />
            <div className="flex flex-col gap-2">
              <InputUILogin
                control={control as never}
                placeholder="Digite sua chave de acesso"
                error={errors}
                name="access_key"
                label="Chave de acesso"
                allUpperCase
              />
              <div className="flex flex-row md:flex-col lg:flex-row items-center justify-between md:justify-center lg:justify-between">
                <InputCheckBoxUI
                  control={control as never}
                  label="Mantenha-me conectado"
                  name="keepConnected"
                  colourEye={{ color: colors[index].color }}
                  className="text-[#444648] font-medium !text-xs"
                  noUppercase
                />
                <Link
                  href="/reset-password"
                  className="text-end font-medium !text-xs"
                >
                  <span style={{ color: colors[index].color }}>
                    Esqueceu sua senha?
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              onClick={handleSubmit(() => {})}
              text="Entrar"
              style={{
                background: `linear-gradient(to right, ${colors[index].color}, ${colors[index].gradient})`,
              }}
              loading={false}
            />

            <span className="mt-2 text-center font-medium !text-xs text-themeFontsPrimary">
              Não tem uma conta?
              <span
                className="font-bold"
                style={{ color: colors[index].color }}
              >
                Criar conta
              </span>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
