import { Card } from "react-bootstrap";
import TechBadge from "../TechBadge";

const TechCard = ({ techGroup }) => {
  const groupStack = () =>
    Object.values(techGroup.values).map((badge, index) => (
      <TechBadge
        badge={badge}
        key={index}
        isShort={false}
        showDeprecated={false}
      />
    ));

  return (
    <Card>
      <Card.Header className={techGroup.class} as="h5">
        {techGroup.title}
      </Card.Header>
      <Card.Body>
        <Card.Text>{groupStack()}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TechCard;
