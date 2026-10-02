import { FileText, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';

export const AvailabilityDialog = ({ kind, onClose, openerRef }) => {
  const resume = kind === 'resume';
  const Icon = resume ? FileText : Phone;
  return (
    <Dialog open={Boolean(kind)} onOpenChange={open => !open && onClose()}>
      <DialogContent className="availability-dialog" data-testid="availability-dialog"
        onCloseAutoFocus={event => {
          event.preventDefault();
          openerRef.current?.focus({ preventScroll: true });
        }}>
        <span className="dialog-icon" aria-hidden="true"><Icon size={25} strokeWidth={1.5} /></span>
        <p className="eyebrow" data-testid="dialog-category">{resume ? 'THE EXPERIENCE' : 'SAY HELLO'}</p>
        <DialogTitle className="availability-title" data-testid="availability-title">
          {resume ? 'A little more about me.' : 'Good things start with a hello.'}
        </DialogTitle>
        <DialogDescription className="availability-description" data-testid="availability-description">
          {resume ? 'My resume will be available here soon. Thanks for your interest in my work.' : 'Contact details will be shared here soon. I look forward to connecting.'}
        </DialogDescription>
        <Button className="dialog-done" onClick={onClose} data-testid="dialog-done-button">Back to exploring</Button>
      </DialogContent>
    </Dialog>
  );
};