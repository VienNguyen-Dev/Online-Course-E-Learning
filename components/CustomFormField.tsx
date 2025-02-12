import React, { useState } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldValue, FieldValues, Path } from "react-hook-form";
import { convertCharUpperCase } from "@/lib/ConvertCharUpperCase";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Email from "next-auth/providers/email";

interface CustomFormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}
const CustomFormField = <T extends FieldValues>({ control, name }: CustomFormFieldProps<T>) => {
  let typeInput = "";
  const [showPassword, setShowPassword] = useState(false);

  name === "email" ? (typeInput = "email") : name === "password" && !showPassword ? (typeInput = "password") : "text";

  const togglePasswordVisibility = () => {
    setShowPassword((prev: any) => !prev);
  };

  return (
    <div className="">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="xl:text-[18px] lg:text-[16px] text-[14px] font-medium text-[#262626]">{convertCharUpperCase(name)}</FormLabel>
            <FormControl>
              <div className=" relative">
                <Input
                  className=" xl:rounded-[10px] border-[1px] xl:p-6 border-[#F1F1F3] placeholder:text-[#656567] xl:placeholder:text-[18px] xl:text-[18px] lg:placeholder:text-[16px] lg:text-[16px] placeholder:text-[14px] text-[14px] placeholder:font-normal rounded-[8px] p-5"
                  type={typeInput}
                  placeholder={`Enter your ${name === "fullname" ? "Name" : convertCharUpperCase(name)}`}
                  {...field}
                />
                {name === "password" && (
                  <Button type="button" onClick={() => togglePasswordVisibility()} className=" absolute top-1 right-2 hover:bg-opacity-90">
                    <img className=" absolute w-6 h-6" src="/assets/icons/eye-icon.svg" alt="eye-icon" />
                    {showPassword && (
                      <div className="absolute inset-0 w-full h-full before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-full before:h-[2px] before:bg-gray-600 before:rotate-[-45deg] before:origin-center"></div>
                    )}
                  </Button>
                )}
              </div>
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustomFormField;
