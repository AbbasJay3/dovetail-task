import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BASE_API_URL } from "./constants";
import { setAllMods, isLoading } from "./redux/actions";

import ModCard from "./modsPage";

import { loadingComponent } from "./utils";

const Home = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState("1");
  const modsData = useSelector((state) => state.modsData?.mods?.data);
  const isDataLoading = useSelector((state) => state.modsData?.isLoading);

  // ideally this will be based on the amount of pages that can be returned by the api
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `${BASE_API_URL}?page=${pageNumber}&pageSize=12&sortBy=mostPopular`
        );
        const jsonData = await data.json();

        dispatch(setAllMods(jsonData));
        dispatch(isLoading(false));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [pageNumber]);

  const handlePageClick = (page) => {
    if (page === pageNumber) return;

    dispatch(isLoading(true));
    setPageNumber(page);
  };

  return isDataLoading ? (
    loadingComponent("Loading Mods...")
  ) : (
    <>
      <div className="pages-container">
        {pages.map((page) => (
          <div
            className="pages-container__number"
            onClick={() => handlePageClick(page)}
          >
            {page}
          </div>
        ))}
      </div>
      <div className="mods">
        {modsData && modsData.map((mod) => <ModCard key={mod.id} mod={mod} />)}
      </div>
    </>
  );
};

// tried a way to keep the store data persistent via the function below but time was against me on this one :(

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ resolvedUrl }) => {
//       store.dispatch(setAllMods(data));

//       return {
//         props: { data },
//       };
//     }
// );

export default Home;
