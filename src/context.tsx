import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

const LayoutContext = createContext<
  [
    {
      addAccountDialogIsOpen: any;
      detailsDialogIsOpen: any;
      selectedAsset: any;
      walletDialogIsOpen: any;
    },
    {
      setAddAccountDialogIsOpen: Dispatch<SetStateAction<any>>;
      setDetailsDialogIsOpen: Dispatch<SetStateAction<any>>;
      setSelectedAsset: Dispatch<SetStateAction<any>>;
      setWalletDialogIsOpen: Dispatch<SetStateAction<any>>;
    },
  ]
>([{}, {}] as any);

function useLayoutContext() {
  return useContext(LayoutContext);
}

export default function LayoutProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [addAccountDialogIsOpen, setAddAccountDialogIsOpen] = useState(false);
  const [detailsDialogIsOpen, setDetailsDialogIsOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(false);
  const [walletDialogIsOpen, setWalletDialogIsOpen] = useState(false);

  return (
    <LayoutContext.Provider
      value={useMemo(
        () => [
          {
            addAccountDialogIsOpen,
            detailsDialogIsOpen,
            selectedAsset,
            walletDialogIsOpen,
          },
          {
            setAddAccountDialogIsOpen,
            setDetailsDialogIsOpen,
            setSelectedAsset,
            setWalletDialogIsOpen,
          },
        ],
        [
          addAccountDialogIsOpen,
          detailsDialogIsOpen,
          selectedAsset,
          setAddAccountDialogIsOpen,
          setDetailsDialogIsOpen,
          setSelectedAsset,
          walletDialogIsOpen,
          setWalletDialogIsOpen,
        ],
      )}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useAddAccountDialog() {
  const [{ addAccountDialogIsOpen }, { setAddAccountDialogIsOpen }] =
    useLayoutContext();
  return [addAccountDialogIsOpen, setAddAccountDialogIsOpen];
}

export function useDetailsDialog() {
  const [{ detailsDialogIsOpen }, { setDetailsDialogIsOpen }] =
    useLayoutContext();
  return [detailsDialogIsOpen, setDetailsDialogIsOpen];
}

export function useSelectedAsset() {
  const [{ selectedAsset }, { setSelectedAsset }] = useLayoutContext();
  return [selectedAsset, setSelectedAsset];
}

export function useWalletDialog() {
  const [{ walletDialogIsOpen }, { setWalletDialogIsOpen }] =
    useLayoutContext();
  return [walletDialogIsOpen, setWalletDialogIsOpen];
}
