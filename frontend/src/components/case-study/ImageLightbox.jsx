import * as Dialog from '@radix-ui/react-dialog';
import { X, Maximize2 } from 'lucide-react';

export const ZoomableImage = ({ image, testId, className = '', hero = false }) => <Dialog.Root>
  <Dialog.Trigger asChild>
    <button type="button" className={`zoom-trigger ${className}`} aria-label={`View full screen: ${image.alt}`} data-testid={`zoom-open-${testId}`}>
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={hero ? 'eager' : 'lazy'} fetchPriority={hero ? 'high' : undefined} decoding="async" data-testid={testId} />
      <span className="zoom-hint" aria-hidden="true"><Maximize2 size={16} /></span>
    </button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay className="zoom-overlay" />
    <Dialog.Content className="zoom-content" aria-describedby={undefined} data-testid={`zoom-dialog-${testId}`}>
      <Dialog.Title className="sr-only">{image.alt}</Dialog.Title>
      <Dialog.Close asChild><img src={image.src} alt={image.alt} className="zoom-full" data-testid={`zoom-image-${testId}`} /></Dialog.Close>
      <Dialog.Close className="zoom-close" aria-label="Close full screen image" data-testid={`zoom-close-${testId}`}><X size={22} /></Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>;
