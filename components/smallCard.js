import Image from "next/image";
import styles from "../styles/SmallCard.module.css";

export const SmallCard = ({ title, image }) => {
  return (
    <div className={styles.small_crd_container}>
      <div>
        <Image src={image} width={250} height={300} />
      </div>
      <h1 style={{ fontSize: "1.1rem" }}>{title}</h1>
    </div>
  );
};
