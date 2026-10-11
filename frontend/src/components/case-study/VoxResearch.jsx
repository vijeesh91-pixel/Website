import { CheckCircle2, XCircle } from 'lucide-react';
import { voxNotes, voxHeuristics, voxCompetitors, voxComparison, voxPriorities, voxScope } from '../../content/voxResearch';

export const VoxNotes = () => <div className="vox-notes" data-testid="vox-constraints-notes">
  {voxNotes.map((column, col) => <div className="vox-note-column" key={col}>
    {column.items.map((text, row) => <article className={`vox-note vox-note-${column.tone}`} key={text} data-testid={`vox-note-${col}-${row}`}>
      <p data-testid={`vox-note-text-${col}-${row}`}>{text}</p><span data-testid={`vox-note-author-${col}-${row}`}>VIJEESH TV</span>
    </article>)}
  </div>)}
</div>;

const TableHead = ({ id, columns }) => <thead><tr>{columns.map((column, i) => <th key={column} scope="col" id={`${id}-column-${i}`} data-testid={`${id}-column-${i}`}>{column}</th>)}</tr></thead>;
const supportLabels = { supported: 'Clearly Supported', unsupported: 'Not Supported', partial: 'Partial or less prominent' };
const SupportMark = ({ status, text }) => {
  const Icon = status === 'supported' ? CheckCircle2 : XCircle;
  return <span className={`vox-support vox-support-${status}`}><Icon size={17} aria-hidden="true" /><span className="sr-only">{supportLabels[status]}{text ? ': ' : ''}</span>{text && <span>{text}</span>}</span>;
};

export const VoxHeuristics = () => <table className="vox-table vox-heuristics" data-testid="vox-heuristics-table">
  <caption className="sr-only">Heuristic Analysis</caption><TableHead id="vox-heuristics" columns={['Where', 'Heuristic', 'Findings', 'Severity']} />
  <tbody>{voxHeuristics.map(([where, code, name, finding, severity], i) => <tr key={where} data-testid={`vox-heuristic-row-${i}`}>
    <th scope="row" data-testid={`vox-heuristic-where-${i}`}>{where}</th>
    <td data-label="Heuristic" data-testid={`vox-heuristic-type-${i}`}><span>{code}<br />{name}</span></td>
    <td data-label="Findings" data-testid={`vox-heuristic-finding-${i}`}>{finding}</td>
    <td data-label="Severity" data-testid={`vox-heuristic-severity-${i}`}>{severity}</td>
  </tr>)}</tbody>
</table>;

export const VoxComparison = () => <div className="vox-wide vox-table-section" data-testid="vox-comparison-section">
  <table className="vox-table vox-comparison" data-testid="vox-comparison-table">
    <caption className="sr-only">Competitive Analysis</caption><TableHead id="vox-comparison" columns={['Feature', ...voxCompetitors]} />
    <tbody>{voxComparison.map(([feature, ...values], row) => <tr key={feature} data-testid={`vox-comparison-row-${row}`}>
      <th scope="row" data-testid={`vox-comparison-feature-${row}`}>{feature}</th>
      {values.map((value, col) => <td key={col} data-label={voxCompetitors[col]} data-testid={`vox-comparison-cell-${row}-${col}`}><SupportMark {...value} /></td>)}
    </tr>)}</tbody>
  </table>
  <ul className="vox-table-legend" aria-label="Comparison legend" data-testid="vox-comparison-legend">
    {Object.entries(supportLabels).map(([status, label]) => <li key={status} data-testid={`vox-legend-${status}`}><SupportMark status={status} /><span aria-hidden="true">{label}</span></li>)}
  </ul>
</div>;

export const VoxPriorities = () => <div className="vox-wide vox-table-section">
  <table className="vox-table vox-priorities" data-testid="vox-priorities-table">
    <caption className="sr-only">Prioritisation</caption><TableHead id="vox-priorities" columns={['Feature', 'Impact', 'Effort', 'Priority']} />
    <tbody>{voxPriorities.map(([feature, impact, effort, priority], i) => <tr key={feature} data-testid={`vox-priority-row-${i}`}>
      <th scope="row" data-testid={`vox-priority-feature-${i}`}>{feature}</th>
      <td data-label="Impact" data-testid={`vox-priority-impact-${i}`}>{impact}</td>
      <td data-label="Effort" data-testid={`vox-priority-effort-${i}`}>{effort}</td>
      <td data-label="Priority" data-testid={`vox-priority-value-${i}`}><span className={`vox-priority-mark vox-${priority.toLowerCase()}`}><i aria-hidden="true" />{priority}</span></td>
    </tr>)}</tbody>
  </table>
</div>;

export const VoxScope = () => <div className="vox-scope" data-testid="vox-design-scope">
  {voxScope.map(({ title, items }, col) => <div key={title} className="vox-scope-column">
    <h4 data-testid={`vox-scope-title-${col}`}>{title}</h4><ul>{items.map((item, row) => <li key={item} data-testid={`vox-scope-item-${col}-${row}`}>{item}</li>)}</ul>
  </div>)}
</div>;