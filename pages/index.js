import styles from "../styles/home.module.css";
import Slider from "react-slick";
import { SmallCard } from "../components/smallCard";
import "slick-carousel/slick/slick.css";

const STATIC_MOVIES_MOCK = [
  {
    title: "The Batman",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY212bXBZWXZtRW12RWNjdHdsbXZtTE56UA.jpg",
  },
  {
    title: "Turning Red",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY21tbWJtYm1FbW1tdm1FRWNhbVRUdnhtam12eA.jpg",
  },
  {
    title: "The Northman",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY212bW12Y3ZObXZjdmNFY21HTm1tYndUZk5n.jpg",
  },
  {
    title: "K.G.F: Chapter 2",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY21tbWptTE5UanZSY21MY21wamFtbWFtag.jpg",
  },
  {
    title: "The Secrets of Dumbledore",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY212bXZtcGptVGJtdkVjeG1tbG1ZbWF2Y216.jpg",
  },
  {
    title: "Scream",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY212bVR2bWJtbW1ibWVjY05tdk52bXhqbW1L.jpg",
  },
  {
    title: "Texas Chainsaw Massacre",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY21tdk5tbUVtcEVtYkVjS1Btb3dhdmNtbXZj.jpg",
  },
  {
    title: "Windfall",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY212bVRtbVlUam1lY21FbWdhbWJ2Y3ZjdmN2dw.jpg",
  },
  {
    title: "The Ice Age Adventures of Buck Wild",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY21tbWJtYm1FbW1tanZSY21FYXZ3UGFtRXZ3YQ.jpg",
  },
  {
    title: "Against the Ice",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY21tbWp2Tm1tVHBiRWNtWVlUam12eG1FdmM.jpg",
  },
  {
    title: "Ray Donovan: The Movie",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY21tbWJtYm1FbW12TmJFY21FS1BtcFRFbUV2Yw.jpg",
  },
  {
    title: "Gold ",
    image:
      "https://i.egycdn.com/pic/WmFwZndlY21tbWJ2Y3ZjbXZtcG1FY21JUHdUcEVtcHZh.jpg",
  },
];

export function getStaticProps() {
  // we can fetch our data from a source that gives us our data (at build time )
  return {
    props: {
      Data: STATIC_MOVIES_MOCK,
    },
  };
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
};

export default function Home({ Data }) {
  return (
    <div className={styles.home_container}>
      <h1>
        WELCOME TO{" "}
        <span className={styles.home_gradient_text}>THE MOVIE DB</span> <br />{" "}
        <span
          className={`${styles.home_gradient_text} ${styles.home_small_text}`}
        >
          THE BEST MOVIES WEBSITE TO HANDLE YOUR WATCHING STATE
        </span>
      </h1>
      <div>
        <Slider {...settings}>
          {Data.map((item, index) => (
            <SmallCard
              title={item.title}
              image={item.image}
              key={`mv_${index}`}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
