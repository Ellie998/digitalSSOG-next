'use client';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

import Postit from '../_components/postit';

const AuthPage = () => {
  const [enteredEmail, setEnteredEmail] = React.useState('');
  const [enteredPassword, setEnteredPassword] = React.useState('');

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
              <CardContent>
                <form>
                  <div className="grid items-center w-full gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">이메일</Label>
                      <Input
                        id="email"
                        placeholder="email"
                        onChange={(e) => {
                          setEnteredEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="password">비밀번호</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="password"
                        onChange={(e) => {
                          setEnteredPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  onClick={() => {
                    console.log(enteredEmail, enteredPassword);
                  }}
                >
                  로그인
                </Button>
              </CardFooter>
              <CardFooter className="flex justify-around">
                <Link href={'/auth/forget'} className="cursor-pointer ">
                  비밀번호 찾기
                </Link>
                <Separator orientation="vertical" className="h-[24px]" />
                <Link href={'/auth/signup'} className="cursor-pointer ">
                  회원가입
                </Link>
              </CardFooter>
            </>
          }
        ></Postit>
      </div>
    </div>
  );
};
export default AuthPage;
