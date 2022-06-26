import { randomNumberGenerator } from "../../../utils";

export const ModBody = ({ screenShots, shortDescription, longDescription }) => {
  return (
    <>
      <img
        className="mod-body-image"
        src={screenShots[randomNumberGenerator(screenShots.length)].url}
        alt={shortDescription}
      />
      <>
        <h1>Overview</h1>
        <span>{longDescription}</span>
      </>
    </>
  );
};
