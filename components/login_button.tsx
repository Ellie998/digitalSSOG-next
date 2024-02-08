'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { supabase } from '@/lib/subabase/initSupabase';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LoginButton = async () => {
  const router = useRouter();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      {user ? (
        <div>
          <p>{user.email}</p>
          <Button
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
