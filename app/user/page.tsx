'use client';

import { supabase } from '@/lib/subabase/initSupabase';
import { useEffect, useState } from 'react';

const UserPage = () => {
  const [user, setUser] = useState<{ email: string | undefined } | null>({
    email: '' || undefined,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Supabase 클라이언트에서 현재 사용자 정보 가져오기
        const currentUser = await supabase.auth.getUser();

        // 현재 사용자가 로그인한 경우
        if (currentUser) {
          // 사용자 email 가져오기
          const userEmail = currentUser.data.user?.email;
          // const userNickname = currentUser.data.user?.nickname;

          // 사용자 정보 설정
          setUser({
            email: userEmail, // 이메일 등 다른 정보도 가져올 수 있음
          });
        } else {
          // 로그인하지 않은 경우
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // 페이지 로드 시 사용자 정보 가져오기
    fetchUserData();
  }, []);

  return <div>{user?.email}</div>;
};
export default UserPage;
