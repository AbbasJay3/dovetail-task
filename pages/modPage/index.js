import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { BASE_API_URL } from "../constants";
import { loadingComponent } from "../utils";

import ModDetails from "./components/modDetails/modDetails";

// the data for this page can also be attained via the use of useSelector once the store data is persistent
const ModPage = () => {
  const [modData, setModData] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${BASE_API_URL}/${id}`);
        const jsonData = await data.json();

        setModData(jsonData.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return !Object.keys(modData).length > 0 ? (
    loadingComponent("Loading Mod Page...")
  ) : (
    <ModDetails mod={modData} />
  );
};

ModPage.getInitialProps = ({ query: { id } }) => {
  return { id };
};

export default ModPage;
