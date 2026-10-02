import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PortfolioSidebar } from '../components/portfolio/PortfolioSidebar';
import { ProfileSection } from '../components/portfolio/ProfileSection';
import { ResumeDownload } from '../components/ResumeDownload';
import { biography, experience, education, certifications, profileAssets } from '../content/profile';
import { revealEase } from '../content/site';
import './Portfolio.css';
import './PersonalPages.css';

export default function ProfilePage() {
  const heading = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, []);
  return <div className="work-shell" data-testid="profile-page">
    <PortfolioSidebar active="profile" />
    <motion.main className="work-content profile-main" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: revealEase }}>
      <div className="profile-container">
        <h1 ref={heading} tabIndex={-1} className="profile-greeting" data-testid="profile-heading">Hi, I’m Vijeesh,</h1>
        <div className="profile-biography">{biography.map((text, index) => <p key={index} data-testid={`profile-bio-${index}`}>{text}</p>)}</div>
        <ResumeDownload testId="profile-resume-download" />
        <section className="profile-tools" aria-labelledby="profile-tools-heading">
          <h2 id="profile-tools-heading" data-testid="profile-tools-heading">Tools</h2>
          <img src={profileAssets.tools} alt="Figma, Adobe Photoshop, Adobe Illustrator, InVision, HTML5, and Notion" width="652" height="71" data-testid="profile-tools-icons" />
        </section>
        <div className="profile-history">
          <ProfileSection title="Experience" items={experience} id="experience" />
          <ProfileSection title="Education" items={education} id="education" />
        </div>
        <ProfileSection title="Certification" items={certifications} id="certifications" />
      </div>
    </motion.main>
  </div>;
}