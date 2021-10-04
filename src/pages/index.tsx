import { useEffect } from 'react';
import { useRouter } from 'next/router';

// import Main from '../components/ShellLayout';

export default function Home() {
  // return <Main />;
  const { replace } = useRouter();

  useEffect(() => {
    replace('/activity-feed');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
