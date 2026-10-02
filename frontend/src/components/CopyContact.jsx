import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export const CopyContact = ({ value, label, id }) => {
  const [status, setStatus] = useState('');
  const timer = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus('Copied!');
    } catch { setStatus('Select the text to copy.'); }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus(''), 3000);
  };
  return <span className="copy-contact">
    <button type="button" onClick={copy} aria-label={`Copy ${label}`} className="contact-copy-button" data-testid={`copy-${id}`}>
      {status === 'Copied!' ? <Check size={21} aria-hidden="true" /> : <Copy size={21} aria-hidden="true" />}
    </button>
    <span role="status" className="copy-status" data-testid={`copy-${id}-status`}>{status}</span>
  </span>;
};