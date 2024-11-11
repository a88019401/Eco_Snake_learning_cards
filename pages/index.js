import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className={styles.container}>
      <motion.h1 layoutId="header">回收小知識</motion.h1>
      <div className={styles["product-container"]}>
        {["Bottle","Cigarette","Glass"].map((product) => (
          <Link href={product}>
            
              <motion.img
                layoutId={product}
                className={styles.image}
                src={product + ".png"}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
            
          </Link>
        ))}
      </div>
      {/* 預留<div className={styles["product-container"]}>
        {[].map((product) => (
          <Link href={product}>
            
              <motion.img
                layoutId={product}
                className={styles.image}
                src={product + ".PNG"}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
            
          </Link>
        ))}
      </div>*/}

    </div>
  );
}