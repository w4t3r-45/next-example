import { ExploreCard } from "./exploreCard";
import styles from "../styles/explore.module.css";

export const Explore = ({ movies }) => {
  console.log(movies);
  return (
    <div className={styles.exploreContainer}>
      {movies.map((item, index) => (
        <ExploreCard item={item} />
      ))}
    </div>
  );
};
