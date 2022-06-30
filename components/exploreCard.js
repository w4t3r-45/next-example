import Image from "next/image";
import { ImageLinkBuilder } from "../helpers/imageLinkBuilder";
import styles from "../styles/exploreCard.module.css";
// {
//   adult: false,
//   backdrop_path: '/tzNx4y7kYf1Xw3F3T6QxrE7PPwb.jpg',
//   genre_ids: [ 53, 18, 80, 9648, 27 ],
//   id: 825808,
//   original_language: 'en',
//   original_title: 'See for Me',
//   overview: "When blind former skier Sophie cat-sits in a secluded mansion, three thieves invade for the hidden safe. Sophie's only defense is army veteran Kelly, who she meets on the See For Me app. Kelly helps Sophie defend herself against the invaders and survive.",
//   popularity: 1777.448,
//   poster_path: '/qk1ZERG6yhwAJqTobmDgw8jRL2C.jpg',
//   release_date: '2022-01-07',
//   title: 'See for Me',
//   video: false,
//   vote_average: 6.1,
//   vote_count: 59
// }

export const ExploreCard = ({ item }) => {
  const { title, poster_path, original_language, release_date, overview } =
    item;
  return (
    <div className={styles.exploreCardContainer}>
      <Image src={ImageLinkBuilder(poster_path)} width={250} height={400} />
      <div className={styles.cardExplorerContent}>
        <p className={styles.crdExplrr_title}>{title}</p>
        <p className={styles.crdExplrr_date}>Release Date : {release_date}</p>
        <p className={styles.crdExplrr_languange}>
          Original Language : {original_language}
        </p>
        <p className={styles.crdExplrr_overview}>
          <span> Overview :</span>
          {overview}
        </p>
      </div>
      <div className={styles.explore_btns_container}>
        <button
          className={`${styles.explore_btn} ${styles.explore_expand_btn}`}
        >
          Expand Details
        </button>
        <button
          className={`${styles.explore_btn} ${styles.explore_watched_btn}`}
        >
          Add Watched
        </button>
      </div>
    </div>
  );
};
