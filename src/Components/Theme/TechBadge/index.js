import { Badge } from "react-bootstrap";

const TechBadge = ({ badge, isShort, showDeprecated }) => {
  return badge.deprecated && !showDeprecated ? null : (
    <span>
      <Badge className={badge.class}>
        {isShort && badge.shortTitle ? badge.shortTitle : badge.title}{" "}
      </Badge>{" "}
    </span>
  );
};

export default TechBadge;
