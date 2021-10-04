import Link from 'next/link';
import { useWallets } from '../../context/data';

export default function Wallets() {
  const [wallets] = useWallets();

  return (
    <div>
      {wallets.map((wallet: any) => (
        <Link href={'/wallets/' + wallet.id} key={wallet.id}>
          <a>
            <h3>{wallet.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
