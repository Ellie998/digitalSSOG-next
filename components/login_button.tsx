'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { supabase } from '@/lib/subabase/initSupabase';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TbMoodSmileFilled } from 'react-icons/tb';

const LoginButton = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    supabase.auth
      .getUser()
      .then((data) => setUser(data.data.user || {}))
      .catch(() => {
        toast.error('error!');
      });
  }, []);

  return (
    <>
      {user ? (
        <div className="flex flex-col items-end">
          <p className="flex items-center">
            {user.email}님 반갑습니다 <TbMoodSmileFilled />
          </p>
          <div className="flex gap-x-4">
            <Button
              variant={'outline'}
              onClick={async (e) => {
                e.preventDefault();
                alert('로그아웃 하시겠습니까?');
                const { error } = await supabase.auth.signOut();
                if (error) toast.error('에러가 발생했습니다.');
                router.refresh();
              }}
            >
              로그아웃
            </Button>
            <Button>
              <Link href={'/user'}>마이페이지</Link>
            </Button>
          </div>
        </div>
      ) : (
        <Button>
          <Link href={'/auth/signIn'}>로그인</Link>
        </Button>
      )}
    </>
  );
};

export default LoginButton;
