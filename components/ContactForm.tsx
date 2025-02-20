"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "./CustomFormField";

const formSchema = z.object({
  firstname: z
    .string()
    .min(3, {
      message: "First Name must be at least 3 characters.",
    })
    .max(50, {
      message: "First Name must be shorter than 50 characters.",
    }),
  lastname: z
    .string()
    .min(3, {
      message: "Last Name must be at least 3 characters.",
    })
    .max(50, {
      message: "Last Name must be shorter than 50 characters.",
    }),
  email: z.string().email({ message: "Email is not format. Please check and try again." }).max(50, {
    message: "Email is not format or must not be longger than 50 characters.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Phone must be at least 10 digits.",
    })
    .max(15, {
      message: "Phone must not be  logger than 15 digits",
    }),
  subject: z
    .string()
    .min(3, {
      message: "Subject must be at least 3 characters.",
    })
    .max(50, {
      message: "Subject must be shorter than 50 characters.",
    }),
  message: z
    .string()
    .min(3, {
      message: "Message must be at least 3 characters.",
    })
    .max(300, {
      message: "Message must be shorter than 300 characters.",
    }),
});

export function ContactForm() {
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className=" 2xl:p-[80px] 2xl:gap-[50px] xl:p-[60px] xl:gap-[40px] p-[30px] gap-[30px]  2xl:max-w-[1076px] bg-white w-full  sm:border-r sm:border-[#F1F1F3] xl:max-w-[870px] max-w-[358px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col 2xl:gap-[30px] xl:gap-[24px] gap-[20px]">
            <div className="flex 2xl:gap-[30px] xl:gap-[24px] flex-col sm:flex-row gap-[20px]">
              <CustomFormField control={form.control} name="firstname" />
              <CustomFormField control={form.control} name="lastname" />
            </div>
            <div className="flex 2xl:gap-[30px] xl:gap-[24px]  flex-col sm:flex-row gap-[20px]">
              <CustomFormField control={form.control} name="email" />
              <CustomFormField control={form.control} name="phone" />
            </div>
            <CustomFormField control={form.control} name="subject" />
          </div>
          <CustomFormField control={form.control} name="message" />
          <div className="w-full flex justify-center items-center ">
            <Button
              className=" capitalize rounded-[6px] xl:py-[14px] xl:px-[20px] 2xl:py-[18px] px-[24px] bg-[#FF9500] 2xl:text-[18px] text-[14px] text-white w-full max-w-[298px] xl:max-w-[174px] 2xl:max-w-[220px]"
              type="submit"
            >
              Send your message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
