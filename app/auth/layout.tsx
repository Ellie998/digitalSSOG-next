export const runtime = 'edge';

import { Suspense } from 'react';

import Loading from '../(blog)/(routes)/(root)/loading';
import Logo from '../(blog)/_components/logo';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="absolute p-6 pl-8 w-max max-sm:static max-sm:mx-auto">
        <Logo />
      </div>
      <main className="flex items-center justify-center w-full h-full max-sm:h-max">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default AuthLayout;
