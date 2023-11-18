const ExperienceSection = ({ job }) => {
  return (
    <section aria-labelledby={job.slug}>
      <h2 id={job.slug}>
        {job.start_date.getFullYear()} – {job.end_date.getFullYear()}
      </h2>
      <div>
        <h3>
          <i className="bi bi-geo-alt-fill"></i> {job.location}
        </h3>
        <h3>
          {job.organization} | <strong>{job.title}</strong>
        </h3>
        <p>{job.description}</p>
        <ul>
          {job.responsibilities.forEach((responsibility, i) => (
            <li key={i}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
