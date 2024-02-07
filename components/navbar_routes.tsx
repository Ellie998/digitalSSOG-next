import Link from 'next/link';
import { Button } from './ui/button';

const NavbarRoutes = () => {
  return (
    <div className="flex ml-auto gap-x-2">
      <Button>
        <Link href={'/auth/signin'}>로그인</Link>
      </Button>
    </div>
  );
};

export default NavbarRoutes;
