import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TechBadge from "../TechBadge";

const ProjectCard = ({ project }) => {
  const techStack = (project) => {
    const stack = project.shortStack ? project.shortStack : project.stack;
    return stack.map((badge, index) => (
      <TechBadge badge={badge} key={index} isShort={true} />
    ));
  };

  return (
    <Card>
      <Card.Img variant="top" src={project.thumb} alt="" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Card.Text>{techStack(project)}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {project.uri && (
          <a
            href={project.uri}
            rel="noreferrer"
            target="_blank"
            className="m-1"
          >
            <Button>{project.uriLabel ? project.uriLabel : "App"}</Button>
          </a>
        )}
        {project.code && (
          <a
            href={project.code}
            rel="noreferrer"
            target="_blank"
            className="m-1"
          >
            <Button>
              <i
                className={
                  project.codeIcon ? `bi ${project.codeIcon}` : "bi bi-github"
                }
              ></i>{" "}
              Code
            </Button>
          </a>
        )}
        {project.slug && (
          <Link to={`/portfolio/${project.slug}`} className="m-1">
            <Button>Details</Button>
          </Link>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
