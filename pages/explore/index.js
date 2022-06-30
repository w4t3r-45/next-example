import axios from "axios";
import { Explore } from "../../components/explore";

export async function getServerSideProps() {
  // request newst movies
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=e11e8bfa9b86deda6e8453480d7f974a&sort_by=popularity.desc"
  );

  console.log(response.data.results);
  // return them as props "data"
  return {
    props: {
      data: response.data.results,
    },
  };
}

export default function ExploreRoute({ data }) {
  return <Explore movies={data} />;
}
