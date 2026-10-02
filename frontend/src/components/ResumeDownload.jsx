import { useState } from 'react';
import { ArrowDown, LoaderCircle } from 'lucide-react';
import { Button } from './ui/button';
import { site } from '../content/site';

export const ResumeDownload = ({ testId, className = 'personal-resume', children = 'Download Resume', icon = true }) => {
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const download = async event => {
    if (failed) return; // The retry link opens the original PDF if browser downloads are restricted.
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    try {
      const response = await fetch(site.resumeUrl);
      if (!response.ok) throw new Error('Download unavailable');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'Vijeesh-CV.pdf';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      setFailed(true);
    } finally { setBusy(false); }
  };
  return <Button asChild className={className}><a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={download} data-testid={testId} aria-busy={busy} aria-live="polite">
    {failed ? 'Open resume PDF' : busy ? 'Downloading…' : children}
    {busy ? <LoaderCircle size={20} className="animate-spin" aria-hidden="true" /> : icon && <ArrowDown size={21} aria-hidden="true" />}
  </a></Button>;
};