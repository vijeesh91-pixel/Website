export const BrandingGallery = ({ gallery }) => (
  <div className={`branding-grid branding-wide branding-grid-${gallery.id}`} role="group" aria-label={gallery.label} data-testid={`branding-gallery-${gallery.id}`}>
    {gallery.images.map(image => (
      <figure className="branding-cell" key={image.id} data-testid={`branding-cell-${image.id}`}>
        <img src={image.src} alt={image.alt} width={image.width} height={image.height}
          loading="lazy" decoding="async" data-testid={`branding-image-${image.id}`} />
      </figure>
    ))}
  </div>
);

export const BrandingSection = ({ id, title, description, galleries }) => (
  <section className="branding-section" aria-labelledby={`branding-${id}-title`} data-testid={`branding-section-${id}`}>
    <div className="branding-copy">
      <h2 id={`branding-${id}-title`} data-testid={`branding-heading-${id}`}>{title}</h2>
      <p data-testid={`branding-description-${id}`}>{description}</p>
    </div>
    {galleries.map(gallery => <BrandingGallery key={gallery.id} gallery={gallery} />)}
  </section>
);