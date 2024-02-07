import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const ForgetPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-slate-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>비밀번호 찾기</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid items-center w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nickname">이메일</Label>
                <Input id="email" type="email" placeholder="email" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>비밀번호 찾기</Button>
        </CardFooter>
        <CardFooter className="flex justify-around">
          <Link href={'/auth/signin'} className="cursor-pointer ">
            로그인
          </Link>
          <Separator orientation="vertical" className="h-[24px]" />
          <Link href={'/auth/signup'} className="cursor-pointer ">
            회원가입
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default ForgetPage;
