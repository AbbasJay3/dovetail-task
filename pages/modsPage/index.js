import Link from "next/link";

import { capitaliseFirstLetter, displayTags } from "../utils";

const ModCard = ({ mod }) => {
  return (
    <Link
      href={{
        pathname: "/modPage",
        query: { id: mod.id },
      }}
    >
      <div className="mod-card">
        <img className="mod-card__image" src={mod.thumbnail} alt={mod.title} />
        <div className="mod-card__container">
          <h3>{mod.title}</h3>
          <div className="mod-card__categories">
            <span className="mod-card__categories_category">
              {capitaliseFirstLetter(mod.category)}
            </span>
            <div className="mod-card__categories_tags">{displayTags(mod)}</div>
          </div>
          <span>{`${mod.subscriberCount} Subscribers`}</span>
        </div>
      </div>
    </Link>
  );
};

export default ModCard;
