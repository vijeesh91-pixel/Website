import * as Dialog from '@radix-ui/react-dialog';
import { X, Maximize2 } from 'lucide-react';

export const ZoomableImage = ({ image, id }) => <Dialog.Root>
  <Dialog.Trigger asChild>
    <button type="button" className="zoom-trigger" aria-label={`View full screen: ${image.alt}`} data-testid={`zoom-open-${id}`}>
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" data-testid={`oddup-image-${id}`} />
      <span className="zoom-hint" aria-hidden="true"><Maximize2 size={16} /></span>
    </button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay className="zoom-overlay" data-testid={`zoom-overlay-${id}`} />
    <Dialog.Content className="zoom-content" aria-describedby={undefined} data-testid={`zoom-dialog-${id}`}>
      <Dialog.Title className="sr-only">{image.alt}</Dialog.Title>
      <Dialog.Close asChild><img src={image.src} alt={image.alt} className="zoom-full" data-testid={`zoom-image-${id}`} /></Dialog.Close>
      <Dialog.Close className="zoom-close" aria-label="Close full screen image" data-testid={`zoom-close-${id}`}><X size={22} /></Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>;
