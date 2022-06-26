export const capitaliseFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const displayTags = (mod) =>
  mod.tags.map((tag) => (
    <span className="mod-card__categories_tags__tag">{`*${tag.name}`}</span>
  ));

export const loadingComponent = (loadingText = "Loading...") => {
  return (
    <div className="loading-screen">
      <h1>{loadingText}</h1>
    </div>
  );
};

export const randomNumberGenerator = (number) =>
  Math.floor(Math.random() * number);
