export const ModHeading = ({ title, owner }) => {
  const { username, countOfModsPublished } = owner;

  return (
    <div className="mod-heading">
      <h1>{title}</h1>
      <div className="mod-heading__owner-container">
        <span>{username}</span>
        <span>{`User has uploaded ${countOfModsPublished} times`}</span>
      </div>
    </div>
  );
};
