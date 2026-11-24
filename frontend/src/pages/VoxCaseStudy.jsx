import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CaseStudyImage, CaseStudyText } from '../components/case-study/CaseStudyBlocks';
import { VoxNotes, VoxHeuristics, VoxComparison, VoxPriorities, VoxScope } from '../components/case-study/VoxResearch';
import { VoxWireframes, VoxPrototype } from '../components/case-study/VoxScreens';
import { voxImages as images, voxCopy as copy, voxFlowUrl } from '../content/vox';
import { revealEase } from '../content/site';
import { ZoomableImage } from '../components/case-study/ImageLightbox';
import { FloatingNav } from '../components/case-study/FloatingNav';
import { ProjectNav } from '../components/case-study/NextProject';
import './PoonchCaseStudy.css';
import './VoxCaseStudy.css';

export default function VoxCaseStudy() {
  const heading = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, []);
  return <main className="case-page vox-page" data-testid="vox-case-study">
    <motion.header className="case-header case-column" initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: revealEase }}>
      <Link to="/portfolio" className="case-back" data-testid="vox-back-top"><ArrowLeft size={14} aria-hidden="true" /> Back to Work</Link>
      <div className="case-project-label" data-testid="vox-project-label"><span className="case-project-icon" aria-hidden="true"><img src="https://customer-assets-lqy194kg.emergentagent.net/job_portfolio-landing-96/artifacts/6990476a84cedb9c_Rectangle%201229.webp" alt="" width="38" height="38" data-testid="vox-project-icon" /></span><span>Vox Cinemas</span></div>
      <h1 ref={heading} tabIndex={-1} data-testid="vox-case-title">{copy.title}</h1>
    </motion.header>
    <CaseStudyImage image={images.hero} id="vox-hero" hero />
    <CaseStudyText id="vox-glance" title="At-A-Glance" paragraphs={copy.glance} major>
      <dl className="case-facts" data-testid="vox-case-facts">
        {[['Team', 'Vijeesh Thattante Valappil (UI/UX)'], ['Role', 'Mobile application, Website'], ['Timeline', '1-2 Weeks']].map(([label, value], i) => <div key={label}><dt data-testid={`vox-fact-label-${i}`}>{label}</dt><dd data-testid={`vox-fact-value-${i}`}>{value}</dd></div>)}
      </dl>
    </CaseStudyText>
    <CaseStudyText id="vox-problem" title="Problem Statement" paragraphs={copy.problem} major><p className="vox-question" data-testid="vox-problem-question">{copy.question}</p></CaseStudyText>
    <CaseStudyText id="vox-constraints" title="Constraints and Assumptions" paragraphs={copy.constraints} major><VoxNotes /></CaseStudyText>
    <CaseStudyText id="vox-analysis" title="Intuitive and Heuristics Analysis" paragraphs={copy.analysis} major />
    <CaseStudyText id="vox-mental" title="The user's mental model" paragraphs={copy.mental}>
      <div className="vox-mental-models" data-testid="vox-mental-models">{[['Current Mental model', copy.current], ['Desired Mental model', copy.desired]].map(([title, text], i) => <div className="vox-mental-model" key={title}><h4 data-testid={`vox-mental-title-${i}`}>{title}</h4><p data-testid={`vox-mental-text-${i}`}>{text}</p></div>)}</div>
    </CaseStudyText>
    <CaseStudyText id="vox-heuristics" title="Heuristic Analysis" paragraphs={[]}><VoxHeuristics /></CaseStudyText>
    <CaseStudyText id="vox-opportunity" title="Design Opportunity" paragraphs={copy.opportunity} />
    <CaseStudyText id="vox-competitive" title="Competitive Analysis" paragraphs={copy.problem} major><p className="vox-question" data-testid="vox-competitive-question">{copy.question}</p></CaseStudyText>
    <VoxComparison />
    <p className="case-column vox-comparison-summary" data-testid="vox-comparison-summary">{copy.comparison}</p>
    <CaseStudyText id="vox-priority" title="Prioritisation" paragraphs={[]} major><p className="vox-question" data-testid="vox-priority-lead">{copy.priorityLead}</p><p data-testid="vox-priority-description">{copy.priority[0]}</p></CaseStudyText>
    <VoxPriorities />
    <CaseStudyText id="vox-scope" title="The resulting design scope" paragraphs={[]}><VoxScope /></CaseStudyText>
    <CaseStudyText id="vox-flow" title="User flow" paragraphs={copy.flow} major>
      <p className="vox-flow-link" data-testid="vox-flow-link-label">Detailed User Flow : <a href={voxFlowUrl} target="_blank" rel="noopener noreferrer" data-testid="vox-detailed-flow-link">Click here <ArrowUpRight size={14} aria-hidden="true" /></a></p>
    </CaseStudyText>
    <div className="case-column vox-flow-image" data-testid="vox-flow-image-link"><ZoomableImage image={images.flow} testId="vox-user-flow-image" /></div>
    <CaseStudyText id="vox-wireframe" title="Wireframe" paragraphs={copy.wireframes} major />
    <VoxWireframes />
    <CaseStudyText id="vox-prototype" title="Prototype Screens" paragraphs={copy.prototype} major />
    <VoxPrototype />
    <footer className="case-footer case-column case-nav"><ProjectNav current="vox" /></footer>
    <FloatingNav />
  </main>;
}