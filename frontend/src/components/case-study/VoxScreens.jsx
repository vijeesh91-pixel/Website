import { voxImages, voxPrototype, voxWireframes } from '../../content/vox';
import { ZoomableImage } from './ImageLightbox';

export const VoxWireframes = () => <div className="vox-wide vox-wireframes" data-testid="vox-wireframe-gallery">
  {voxWireframes.map(screen => <ZoomableImage key={screen.id} image={{ ...screen, alt: `VOX ${screen.title} wireframe` }} testId={`vox-wireframe-${screen.id}`} />)}
</div>;

export const VoxPrototype = () => <div className="vox-wide vox-prototype-stage" data-testid="vox-prototype-stage">
  <img className="vox-prototype-backdrop" {...voxImages.prototype} loading="lazy" decoding="async" data-testid="vox-prototype-backdrop" />
  <div className="case-column vox-prototype-grid" data-testid="vox-prototype-gallery">
    {voxPrototype.map((screen, index) => <figure key={screen.id} className="vox-screen" data-testid={`vox-prototype-figure-${screen.id}`}>
      <figcaption>
        <span className="vox-screen-number" data-testid={`vox-prototype-number-${screen.id}`}>{index + 1}</span>
        <div><h3 data-testid={`vox-prototype-title-${screen.id}`}>{screen.title}</h3><p data-testid={`vox-prototype-caption-${screen.id}`}>{screen.description}</p></div>
      </figcaption>
      <ZoomableImage image={{ ...screen, alt: `VOX ${screen.title} design` }} testId={`vox-prototype-${screen.id}`} />
    </figure>)}
  </div>
</div>;
