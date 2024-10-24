import { useState, useTransition } from "react";
import { FormSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, InputMaskCustom } from "../../ui/Input";
import CheckBox from "../../ui/CheckBox";
import { Helmet } from "react-helmet";
import { Oval } from "react-loader-spinner";

import FormError from "../../components/FormError";
import FormSuccess from "../../components/FormSuccess";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      compname: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const [isPending, startTransition] = useTransition();
  const [check, setCheck] = useState(false);
  const [result, setResult] = useState(null);

  const handleForm = async (values) => {
    try {
      const res = await fetch(
        "https://pdvkpchtt-oil-and-gas-nodemailer-1ef5.twc1.net/sendmail_shloos",
        // "http://localhost:9000/sendmail_shloos",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();
      setResult(data);
      reset();
    } catch (e) {
      setResult({ status: "bad" });
    }
  };

  const submitForm = (values) => {
    if (check) {
      setResult(null);

      startTransition(() => {
        handleForm(values);
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Контакты</title>
      </Helmet>
      <div className="flex flex-col w-full">
        {/* top image block */}
        <div className="relative">
          <p className="text-white text-[70px] [@media(max-width:1050px)]:text-[55px] [@media(max-width:1050px)]:left-[10px] font-extrabold absolute z-[3] whitespace-pre-line leading-[72px] custom-shadow left-[50px] top-[100px] tracking-[-3%]">
            {`КОНТАКТЫ`}
          </p>
          <img
            src="/2.jpg"
            className="absolute w-[298px] h-[335px] object-cover z-[1]"
            alt="bg"
          />
          <div className="absolute top-0 left-0 w-[298px] h-[335px] bg-[rgba(0,0,0,.2)] z-[2]" />
        </div>

        {/* bg factory */}
        <div className="absolute left-0 w-full h-[258px] overflow-hidden">
          <img
            src="/bg.jpg"
            className="w-full h-full object-cover absolute z-[-1]"
            alt="bg"
          />
        </div>
        {/* bg factory */}

        <div className="mt-[calc(335px+75px)] flex flex-col gap-[5px] w-full">
          <p className="text-center font-semibold text-[25px] text-[#2c2c2c] whitespace-pre-line leading-[120%]">
            Оставьте заявку и мы свяжемся с Вами в ближайшее время
          </p>
          <p className="text-center font-semibold text-[25px] text-[#315EAB] whitespace-pre-line leading-[120%]">
            ssc-solutions@yandex.ru
          </p>

          {result?.status === "good" ? (
            <FormSuccess message={"Заявка успешно отправлена"} />
          ) : result?.status === "bad" ? (
            <FormError message={"Что-то пошло не так"} />
          ) : null}

          {/* form */}
          <form
            className="flex flex-col gap-[15px] w-full mt-[10px] max-w-[750px] mx-auto"
            onSubmit={handleSubmit(submitForm)}
          >
            <Input
              disabled={isPending}
              placeholder={"Наименование компании"}
              error={errors?.compname}
              caption={errors?.compname && errors?.compname?.message}
              register={register("compname")}
            />
            <Input
              disabled={isPending}
              placeholder="Ваше имя"
              error={errors?.name}
              caption={errors?.name && errors?.name?.message}
              register={register("name")}
            />
            <div className="flex flex-row gap-[15px]  [@media(max-width:1050px)]:flex-col">
              <Input
                disabled={isPending}
                placeholder="Почта"
                error={errors?.email}
                caption={errors?.email && errors?.email?.message}
                register={register("email")}
              />
              <InputMaskCustom
                disabled={isPending}
                borderRadius={10}
                placeholder="Телефон"
                error={errors?.phone}
                caption={errors?.phone && errors?.phone?.message}
                register={register("phone")}
              />
            </div>

            <Input
              disabled={isPending}
              placeholder="Сообщение"
              error={errors?.message}
              caption={errors?.message && errors?.message?.message}
              register={register("message")}
            />

            <div className="flex flex-row items-center gap-[15px]">
              <CheckBox active={check} onClick={() => setCheck(!check)} />

              <span className="text-[18px] leading-[18px] select-none text-[#A3A3A3]">
                Нажимая на кнопку, я даю согласие на обработку персональнх
                данных и соглашаюсь{" "}
                <a
                  className="text-[#787878] underline transition duration-[250ms] hover:no-underline"
                  href="https://docs.google.com/document/d/1Om2fqIpQWsSBrYnLkoMqbGZa3lbHc9lDNJMm3moy_V8/edit?usp=sharing"
                  target="_blank"
                >
                  с политикой конфиденциальности
                </a>
              </span>
            </div>

            <button
              type="submit"
              className={`${
                check ? "bg-[#315EAB]" : "bg-[#a3a3a3]"
              } select-none h-[44px] flex items-center justify-center text-center text-[20px] font-medium text-white leading-[20px] transition-colors duration-[250ms]`}
            >
              {isPending ? (
                <Oval
                  height={22}
                  width={22}
                  color="rgba(255, 255, 255, 1)"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="rgba(255, 255, 255, 0.3)"
                  strokeWidth={6}
                  strokeWidthSecondary={6}
                />
              ) : (
                "Отправить запрос"
              )}
            </button>
          </form>
          {/* form */}
        </div>
      </div>
    </>
  );
};

export default Contacts;
