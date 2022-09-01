import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>PROGRESSO</span> CONSTRUCTION
          COMPANY
        </h1>
        <p className={style.desc}>
         Building better for tomorrow.
        </p>
        <p className={style.desc}>
         FULL WEBSITE COMING SOON
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/construction-image.jpeg"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
