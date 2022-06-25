import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BASE_API_URL } from "./constants";
import { setAllMods } from "./actions";

const Home = () => {
  const dispatch = useDispatch();
  const modsData = useSelector((state) => state.modsData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `${BASE_API_URL}?page=1&pageSize=12&sortBy=mostPopular`
        );
        const jsonData = await data.json();

        dispatch(setAllMods(jsonData));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return !modsData?.mods?.data?.length > 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
