import TechBadge from "../TechBadge";

const ExperienceSection = ({ job }) => {
  const techStack = (project) => {
    console.log("stack", project?.stack);
    const stack = project?.shortStack ? project.shortStack : project.stack;
    return stack.map((badge, index) => (
      <TechBadge
        badge={badge}
        key={index}
        isShort={true}
        showDeprecated={true}
      />
    ));
  };

  return (
    <>
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
        <p>{techStack(job)}</p>
        <ul>
          {job.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExperienceSection;
