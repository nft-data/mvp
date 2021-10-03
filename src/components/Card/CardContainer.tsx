import { useState } from 'react';

import { useDetailsDialog, useSelectedAsset } from '../../context';
import Card from './Card';

export default function CardContainer({ asset }: { asset: any }) {
  const [, setDetailsDialogIsOpen] = useDetailsDialog();
  const [, setSelectedAsset] = useSelectedAsset();

  async function handleClick() {
    console.log('handleClick:', handleClick);
    // if (asset && asset.world && asset.world.toLowerCase() !== selectedWorld)
    //   setSelectedWorld(asset.world.toLowerCase());
    setSelectedAsset(asset);
    setDetailsDialogIsOpen(true);
  }

  const [listing] = useState({
    isProfile: asset.isProfile,
    price: asset.price,
    asset: asset.tokenImage,
    usdPrice: asset.usdPrice,
    ethPrice: asset.ethPrice,
    tokenName: asset.tokenName,
    title: asset.name,
    image: asset.image_original_url,
    attributes: asset.attributes,
    size: asset.size,
    world: asset.world,
    lastSale: asset.lastSale,
    coordinates: asset.coordinates,
  });

  return (
    <Card
      // getCoordinates={getCoordinates}
      listing={listing}
      handleClick={handleClick}
    />
  );
}
