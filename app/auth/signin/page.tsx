'use client';
import * as React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { Separator } from '@/components/ui/separator';
import Postit from '../_components/postit';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const schema = z.object({
  email: z.string().min(1, { message: 'Required' }),
  pw: z.string().min(8),
});
const AuthPage = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  function onSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex items-center justify-center w-full h-full bg-slate-100">
      <div className=" w-96 max-sm:w-3/4">
        <Postit
          title={
            <CardHeader>
              <CardTitle>로그인</CardTitle>
            </CardHeader>
          }
          content={
            <>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel htmlFor="email">이메일</FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              placeholder="example@domain.com"
                              required={true}
                              {...field}
                            />
                          </FormControl>

                          {form.formState.errors.email && (
                            <FormDescription>This is your public display name.</FormDescription>
                          )}
                        </FormItem>

                        <FormMessage />
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pw"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel htmlFor="pw">비밀번호</FormLabel>
                          <Input
                            id="pw"
                            type="password"
                            placeholder="password"
                            required={true}
                            {...field}
                          />
                          {form.formState.errors.pw && (
                            <FormDescription>This is your public display name.</FormDescription>
                          )}
                        </FormItem>
                        <FormMessage />
                      </>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    로그인
                  </Button>
                </form>
              </Form>
              <div className="flex justify-around mt-8">
                <Link href={'/auth/forget'} className="cursor-pointer ">
                  비밀번호 찾기
                </Link>
                <Separator orientation="vertical" className="h-[24px]" />
                <Link href={'/auth/signup'} className="cursor-pointer ">
                  회원가입
                </Link>
              </div>
            </>
          }
        ></Postit>
      </div>
    </div>
  );
};
export default AuthPage;
