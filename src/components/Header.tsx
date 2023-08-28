import Link from 'next/link';
import Cart from './Cart';

export default function Header() {
  return (
    <div className="d-flex justify-between py-4 items-center px-6">
      <Link href="/" className="link">
        <img src="/logo.png" width="350px" />
      </Link>
      <Cart />
    </div>
  );
}
