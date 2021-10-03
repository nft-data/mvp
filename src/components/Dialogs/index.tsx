import dynamic from 'next/dynamic';

const AddAccount = dynamic(() => import('./AddAccount'), {
  ssr: false,
});

const AssetDetails = dynamic(() => import('./AssetDetails'), {
  ssr: false,
});
const Wallets = dynamic(() => import('./Wallets'), { ssr: false });

export default function Dialogs() {
  return (
    <>
      <AddAccount />
      <AssetDetails />
      <Wallets />
    </>
  );
}
