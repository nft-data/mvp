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
      walletDialogIsOpen: any;
      selectedCommunity: any;
      tableFilter: any;
      tableFilterCount: any;
      listingDialogIsOpen: any;
      selectedWorld: any;
      selectedListing: any;
      hoveredListing: any;
      selectedMapViews: any;
      selectedPricing: any;
      selectedForSale: any;
    },
    {
      setWalletDialogIsOpen: Dispatch<SetStateAction<any>>;
      setSelectedCommunity: Dispatch<SetStateAction<any>>;
      setTableFilter: Dispatch<SetStateAction<any>>;
      setTableFilterCount: Dispatch<SetStateAction<any>>;
      setListingDialogIsOpen: Dispatch<SetStateAction<any>>;
      setSelectedWorld: Dispatch<SetStateAction<any>>;
      setSelectedListing: Dispatch<SetStateAction<any>>;
      setHoveredListing: Dispatch<SetStateAction<any>>;
      setSelectedMapViews: Dispatch<SetStateAction<any>>;
      setSelectedPricing: Dispatch<SetStateAction<any>>;
      setSelectedForSale: Dispatch<SetStateAction<any>>;
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
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [tableFilter, setTableFilter] = useState();
  const [tableFilterCount, setTableFilterCount] = useState(0);
  const [listingDialogIsOpen, setListingDialogIsOpen] = useState(false);
  const [selectedWorld, setSelectedWorld] = useState('decentraland');
  const [selectedListing, setSelectedListing] = useState(null);
  const [selectedPricing, setSelectedPricing] = useState(0);
  const [selectedForSale, setSelectedForSale] = useState('all');
  const [hoveredListing, setHoveredListing] = useState(null);
  const [selectedMapViews, setSelectedMapViews] = useState({
    heat: false,
    byac: false,
    cryptopunks: false,
  });
  const [walletDialogIsOpen, setWalletDialogIsOpen] = useState(false);

  return (
    <LayoutContext.Provider
      value={useMemo(
        () => [
          {
            walletDialogIsOpen,
            tableFilter,
            tableFilterCount,
            selectedCommunity,
            listingDialogIsOpen,
            selectedWorld,
            selectedListing,
            hoveredListing,
            selectedMapViews,
            selectedPricing,
            selectedForSale,
          },
          {
            setWalletDialogIsOpen,
            setTableFilter,
            setTableFilterCount,
            setSelectedCommunity,
            setListingDialogIsOpen,
            setSelectedWorld,
            setSelectedListing,
            setHoveredListing,
            setSelectedMapViews,
            setSelectedPricing,
            setSelectedForSale,
          },
        ],
        [
          walletDialogIsOpen,
          setWalletDialogIsOpen,
          tableFilter,
          setTableFilter,
          tableFilterCount,
          setTableFilterCount,
          selectedCommunity,
          setSelectedCommunity,
          listingDialogIsOpen,
          setListingDialogIsOpen,
          selectedWorld,
          setSelectedWorld,
          selectedListing,
          setSelectedListing,
          hoveredListing,
          setHoveredListing,
          selectedMapViews,
          setSelectedMapViews,
          selectedPricing,
          setSelectedPricing,
          selectedForSale,
          setSelectedForSale,
        ],
      )}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useTableFilter() {
  const [{ tableFilter }, { setTableFilter }] = useLayoutContext();
  return [tableFilter, setTableFilter];
}

export function useTableFilterCount() {
  const [{ tableFilterCount }, { setTableFilterCount }] = useLayoutContext();
  return [tableFilterCount, setTableFilterCount];
}

export function useSelectedCommunity() {
  const [{ selectedCommunity }, { setSelectedCommunity }] = useLayoutContext();
  return [selectedCommunity, setSelectedCommunity];
}

export function useSelectedWorld() {
  const [{ selectedWorld }, { setSelectedWorld }] = useLayoutContext();
  return [selectedWorld, setSelectedWorld];
}

export function useSelectedListing() {
  const [{ selectedListing }, { setSelectedListing }] = useLayoutContext();
  return [selectedListing, setSelectedListing];
}

export function useListingDialog() {
  const [{ listingDialogIsOpen }, { setListingDialogIsOpen }] =
    useLayoutContext();
  return [listingDialogIsOpen, setListingDialogIsOpen];
}

export function useSelectedMapView() {
  const [{ selectedMapViews }, { setSelectedMapViews }] = useLayoutContext();
  return [selectedMapViews, setSelectedMapViews];
}

export function useHoveredListing() {
  const [{ hoveredListing }, { setHoveredListing }] = useLayoutContext();
  return [hoveredListing, setHoveredListing];
}

export function useWalletDialog() {
  const [{ walletDialogIsOpen }, { setWalletDialogIsOpen }] =
    useLayoutContext();
  return [walletDialogIsOpen, setWalletDialogIsOpen];
}

export function useSelectedPricing() {
  const [{ selectedPricing }, { setSelectedPricing }] = useLayoutContext();
  return [selectedPricing, setSelectedPricing];
}

export function useSelectedForSale() {
  const [{ selectedForSale }, { setSelectedForSale }] = useLayoutContext();
  return [selectedForSale, setSelectedForSale];
}
