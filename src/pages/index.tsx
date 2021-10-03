import Main from '../components/ShellLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Main />
      <Link href="/ninjas/">
        <a>See Ninja Listing</a>
      </Link>
    </>
  );
}
