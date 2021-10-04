import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

const DataContext = createContext<
  [
    {
      wallets: any;
    },
    {
      setWallets: Dispatch<SetStateAction<any>>;
    },
  ]
>([{}, {}] as any);

function useDataContext() {
  return useContext(DataContext);
}

export default function DataProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [wallets, setWallets] = useState([
    // {
    //   name: 'Soby',
    //   image: '',
    //   link: 'soby',
    // },
    // {
    //   name: 'ComfyGang',
    //   image: '',
    //   link: 'comfygang',
    // },
    // {
    //   name: 'Trill',
    //   image: '',
    //   link: 'trill',
    // },
    // {
    //   name: 'GuyZalaxy',
    //   image: '',
    //   link: 'guyzalaxy',
    // },
    // {
    //   name: 'PixelVault',
    //   image: '',
    //   link: 'pixelvault',
    // },
  ]);

  return (
    <DataContext.Provider
      value={useMemo(
        () => [
          {
            wallets,
          },
          {
            setWallets,
          },
        ],
        [wallets, setWallets],
      )}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useWallets() {
  const [{ wallets }, { setWallets }] = useDataContext();
  return [wallets, setWallets];
}
