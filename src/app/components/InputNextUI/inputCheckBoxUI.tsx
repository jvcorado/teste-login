"use client";

import React, { useEffect, useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Checkbox } from "@nextui-org/checkbox";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldErrors<{ [key: string]: string }> | FieldErrors;
  type?: string;
  label: string;
  name: string;
  control: Control;
  noUppercase?: boolean;
  colourEye?: React.CSSProperties;
}

export const InputCheckBoxUI: React.FC<InputFieldProps> = ({
  label,
  name,
  control,
  noUppercase = true,
  colourEye,
}) => {
  const [color, setColor] = useState<
    "danger" | "warning" | "default" | "primary" | "secondary" | "success"
  >("danger");

  useEffect(() => {
    if (colourEye) {
      if (colourEye.color === "#006C3E") {
        setColor("primary"); // fix 'sucess' typo
      } else if (colourEye.color === "#C72D2D") {
        setColor("danger");
      } else if (colourEye.color === "#D2710F") {
        setColor("warning");
      }
    }
  }, [colourEye]);

  return (
    <div className="flex flex-row h-full items-center">
      <div className="w-full ">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              color={color}
              /*   icon={<Check color="#fff" className="animate-ping" />} */
              disableAnimation={false}
              isSelected={field?.value ?? false}
              onValueChange={field.onChange}
              radius="sm"
              {...field}
            >
              <p className="flex items-center text-xs font-normal text-themeFontsPrimary">
                {noUppercase ? label : label.toUpperCase()}
              </p>
            </Checkbox>
          )}
        />
      </div>
    </div>
  );
};
