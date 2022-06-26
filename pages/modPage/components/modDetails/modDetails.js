import { ModHeading } from "../modHeading/modHeading";
import { ModBody } from "../modBody/modBody";

const ModDetails = ({ mod }) => {
  const { title, owner, screenshots, shortDescription, longDescription } = mod;

  return (
    <>
      <ModHeading title={title} owner={owner} />
      <ModBody
        screenShots={screenshots}
        description={shortDescription}
        longDescription={longDescription}
      />
    </>
  );
};

export default ModDetails;
