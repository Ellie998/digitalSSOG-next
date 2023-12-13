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

import { toast } from "react-toastify";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { encodeUrl } from "@/lib/utils";

const formSchema = z.object({
  description: z.string(),
});

const MethodDescriptionForm = ({
  id,
  description,
}: {
  id: string;
  description: string;
}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();
  const params = useParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { description: description },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmit(true);
      const response = await fetch(`/api/methods/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: values.description,
        }),
      });
      if (!response.ok) {
        toast.error("ERROR!");
        throw Error("FAIL : METHOD ORDER FORM");
      }

      toast.success("Method description 수정 성공");
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Method Description</FormLabel>
              <FormControl>
                <Input placeholder={description} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmit}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default MethodDescriptionForm;
