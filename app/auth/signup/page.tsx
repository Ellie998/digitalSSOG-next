import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-slate-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid items-center w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nickname">닉네임</Label>
                <Input id="nickname" placeholder="nickname" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" placeholder="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" placeholder="password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password_re">비밀번호 확인</Label>
                <Input id="password_re" placeholder="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>회원가입</Button>
        </CardFooter>
        <CardFooter className="flex justify-around">
          <Link href={'/auth/forget'} className="cursor-pointer ">
            비밀번호 찾기
          </Link>
          <Separator orientation="vertical" className="h-[24px]" />
          <Link href={'/auth/signin'} className="cursor-pointer ">
            로그인
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default SignUpPage;
