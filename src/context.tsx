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
    },
    {
      setAddAccountDialogIsOpen: Dispatch<SetStateAction<any>>;
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

  return (
    <LayoutContext.Provider
      value={useMemo(
        () => [
          {
            addAccountDialogIsOpen,
          },
          {
            setAddAccountDialogIsOpen,
          },
        ],
        [addAccountDialogIsOpen, setAddAccountDialogIsOpen],
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
