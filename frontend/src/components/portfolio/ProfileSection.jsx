export const ProfileSection = ({ title, items, id }) => (
  <section className="profile-section" aria-labelledby={`${id}-heading`} data-testid={`profile-${id}`}>
    <h2 id={`${id}-heading`} data-testid={`${id}-heading`}>{title}</h2>
    <ul className="profile-records">
      {items.map(item => <li key={item.id} className="profile-record" data-testid={`record-${item.id}`}>
        <img src={item.icon} alt="" width="44" height="44" loading="lazy" data-testid={`icon-${item.id}`} />
        <div><h3 data-testid={`record-title-${item.id}`}>{item.title}</h3>
          {item.detail && <p data-testid={`record-detail-${item.id}`}>{item.detail}</p>}
          {item.date && <p className="record-date" data-testid={`record-date-${item.id}`}>{item.date}</p>}
        </div>
      </li>)}
    </ul>
  </section>
);