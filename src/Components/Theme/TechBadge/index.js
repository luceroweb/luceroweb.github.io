import { Badge } from "react-bootstrap";

const TechBadge = ({ badge, isShort }) => {
  return (
    <span>
      <Badge className={badge.class}>
        {isShort && badge.shortTitle ? badge.shortTitle : badge.title}
      </Badge>{" "}
    </span>
  );
};

export default TechBadge;
