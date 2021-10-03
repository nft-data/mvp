import { useRouter } from 'next/router';

export default function Wallet() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
}
