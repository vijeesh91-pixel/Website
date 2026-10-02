import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../content/projects';

export const ProjectCarousel = ({ carousel }) => (
  <section className="project-carousel" aria-label="Selected work" aria-roledescription="carousel" data-testid="project-carousel">
    <div className="slide-indicators" role="group" aria-label="Choose a project" data-testid="slide-indicators" onKeyDown={carousel.onKeyDown}>
      {projects.map((project, index) => (
        <button key={project.id} type="button" className={`slide-indicator ${carousel.selected === index ? 'is-selected' : ''}`}
          onClick={() => carousel.select(index)} aria-label={`Show ${project.title}`} aria-pressed={carousel.selected === index}
          aria-controls="work-projects" data-testid={`slide-indicator-${index}`}>
          <span aria-hidden="true" />
        </button>
      ))}
    </div>
    <p className="sr-only" id="carousel-help">Scroll, swipe, or use the left and right arrow keys to move one project at a time.</p>
    <div ref={carousel.viewportRef} className="project-viewport" id="work-projects" tabIndex={0} aria-label="Project tiles" aria-describedby="carousel-help"
      data-carousel-viewport="true" data-testid="project-viewport" data-lenis-prevent
      onKeyDown={carousel.onKeyDown} onPointerDown={carousel.onPointerDown} onPointerUp={carousel.onPointerUp} onPointerCancel={carousel.onPointerCancel} onClickCapture={carousel.onClickCapture}>
      <div className="project-track">
        {projects.map((project, index) => {
          const TileContent = project.path ? Link : 'div';
          return (
          <article key={project.id} className={`project-tile ${project.wide ? 'project-tile-wide' : ''}`} role="group" aria-roledescription="slide"
            aria-label={`${index + 1} of ${projects.length}: ${project.title}`} data-testid={`project-tile-${project.id}`}>
            <TileContent {...(project.path ? { to: project.path, className: 'project-case-link', draggable: false, 'aria-label': `Read the ${project.title} case study`, 'data-testid': `project-link-${project.id}` } : {})}>
            <motion.div className="project-image-frame" whileHover={{ y: -3 }} transition={{ duration: .35 }}>
              <img src={project.image} alt={project.alt} width={project.wide ? '1307' : '1178'} height="587" draggable="false" loading={index < 2 ? 'eager' : 'lazy'} decoding="async" data-testid={`project-image-${project.id}`} />
            </motion.div>
            <div className="project-caption">
              <h2 data-testid={`project-title-${project.id}`}>{project.title}{project.subtitle && <span className="project-subtitle"> {project.subtitle}</span>}</h2>
              <span className="project-category" data-testid={`project-category-${project.id}`}>{project.category}</span>
            </div>
            <p className="project-description" data-testid={`project-description-${project.id}`}>{project.description}</p>
            </TileContent>
          </article>
        );})}
      </div>
    </div>
    <p className="sr-only" aria-live="polite" aria-atomic="true" data-testid="current-slide-status">Project {carousel.selected + 1} of {projects.length}: {projects[carousel.selected].title}</p>
  </section>
);