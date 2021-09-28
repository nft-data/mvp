import dynamic from 'next/dynamic';

const AddAccount = dynamic(() => import('./AddAccount'), {
  ssr: false,
});

export default function Dialogs() {
  return (
    <>
      <AddAccount />
    </>
  );
}
