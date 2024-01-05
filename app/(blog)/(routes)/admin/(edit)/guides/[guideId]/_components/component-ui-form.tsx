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
  uiBgColor: z.string(),
});

const ComponentUiForm = ({ id }: { id: string }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const { uiBgColor, setUiBgColor, setUiMakingMode } =
    useContext(DisplayContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="p-6 border rounded-sm shadow-md ">
      <div className="py-2 font-bold font-xl">Ui Setting</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="uiBgColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>uiBgColor</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="color"
                    onChange={(e) => {
                      setUiBgColor(e.target.value);
                    }}
                    value={uiBgColor}
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

export default ComponentUiForm;
