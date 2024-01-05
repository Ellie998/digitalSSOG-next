/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { DisplayContext } from "./component-section";

const formSchema = z.object({
  theme: z.string(),
  bgColor: z.string(),
  divide: z.string(),
});

const ComponentForm = ({ id }: { id: string }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const { bgColor, setBgColor } = useContext(DisplayContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // try {
    //   setIsSubmit(true);
    //   const response = await fetch(`/api/guides-components/${id}`, {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       order: Number(values.theme),
    //     }),
    //   });
    //   if (!response.ok) {
    //     toast.error("ERROR!");
    //     throw Error("FAIL : GUIDE ORDER FORM");
    //   }

    //   toast.success("Guide order 수정 성공");
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsSubmit(false);
    // }
    console.log(values);
  }

  return (
    <div className="p-6 border rounded-sm shadow-md ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Theme</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="divide"
            render={({ field }) => (
              <FormItem>
                <FormLabel>divide</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min="1" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bgColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>bgColor</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="color"
                    onChange={(e) => {
                      setBgColor(e.target.value);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmit}>
            Edit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ComponentForm;
