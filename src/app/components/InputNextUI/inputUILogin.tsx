import React from "react";

import { Input, InputProps } from "@nextui-org/input";
import { Eye, EyeOff, Search } from "lucide-react";
import { CurrencyInput } from "react-currency-mask";
import { Control, FieldValues, Controller, FieldErrors } from "react-hook-form";

interface InputFieldProps extends InputProps {
  error?: FieldErrors<{ message: string }> | FieldErrors;
  type?: string;
  label?: string;
  placeholder: string;
  name: string;
  control: Control<FieldValues>;
  disabled?: boolean;
  search?: boolean;
  currrency?: boolean;
  password?: boolean;
  mask?: (value: string) => string;
  allUpperCase?: boolean;
  colourEye?: React.CSSProperties;
}
export const InputUILogin: React.FC<InputFieldProps> = ({
  type = "text",
  label,
  name,
  control,
  disabled,
  currrency,
  password = false,
  search = false,
  allUpperCase = false,
  colourEye,
  mask,
  ...rest
}) => {
  const [isVisible, setIsVisible] = React.useState(password);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const style = {
    label: `text-[#222222] dark:text-white  font-semibold`,
    input: [
      "bg-transparent",
      "text-themeFontsPrimary",
      "placeholder:themeFontsPrimary",
      "placeholder:!normal-case",
      allUpperCase ? "!uppercase" : "!normal-case", // Aplicando aqui
    ],
    innerWrapper: "bg-transparent",
    inputWrapper: [
      "shadow-sm",
      "bg-themeInputs",
      "backdrop-blur-xl",
      "backdrop-saturate-200",
      "!cursor-text",
      "h-[50px]",
      /* `${
        error && error[name]
          ? "border-themeRed group-data-[hover=true]:border-themeRed group-data-[focus=true]:border-themeRed"
          : ""
      }`, */
    ],
  };

  return (
    <div className={`flex flex-col ${rest.className}`} style={{ zoom: 0.98 }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {currrency ? (
              <CurrencyInput
                value={field.value}
                onChangeValue={(_, value) => {
                  field.onChange(value);
                }}
                InputElement={
                  <Input
                    size={"sm"}
                    variant="faded"
                    type={type}
                    label={label}
                    classNames={style}
                  />
                }
              />
            ) : (
              <Input
                size={search ? "lg" : "sm"}
                variant="faded"
                type={!isVisible ? "text" : "password"}
                label={label}
                classNames={style}
                startContent={
                  search ? (
                    <Search className="text-2xl text-default-400 pointer-events-none text-text-themeGreen dark:text-[#aeaeae]" />
                  ) : null
                }
                endContent={
                  password ? (
                    <button
                      className="focus:outline-none h-full"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <Eye
                          className={`text-2xl text-default-400 pointer-events-none ${
                            colourEye
                              ? `text-[${colourEye}]`
                              : "dark:text-[#aeaeae]"
                          }`}
                          style={{
                            color: colourEye ? colourEye.color : "#aeaeae",
                          }}
                        />
                      ) : (
                        <EyeOff
                          className={` text-2xl text-default-400 pointer-events-none ${
                            colourEye ? colourEye.color : "dark:text-[#aeaeae]"
                          }`}
                          style={{
                            color: colourEye ? colourEye.color : "#aeaeae",
                          }}
                        />
                      )}
                    </button>
                  ) : null
                }
                disabled={disabled}
                {...field}
                {...rest}
                onChange={(value) => {
                  const text = value.currentTarget.value;
                  field.onChange(mask ? mask(text.toString()) : text);
                }}
              />
            )}
          </>
        )}
      />
      {/*   {error && error[name] && (
        <span className="text-red-500 text-[11px]">{error[name].message}</span>
      )} */}
    </div>
  );
};
