import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Product() {
  const router = useRouter(); // 確保 router 被正確定義

  const {
    query: { product },
  } = useRouter();

  // 模擬不同產品的資訊
  const productInfo = {
    Bottle: "寶特瓶都是塑膠，但瓶身、瓶蓋、標籤紙分別是三種不同的材質： PET、PP、PVC，回收時要拆開嗎？ 答案是不拆！因為先拆開反而讓瓶蓋在處理過程中跑不見，降低回收的比例。其實只要簡易沖洗、壓扁後蓋上瓶蓋，就可以回收了。在工廠內會經過機器破碎後，以不同材質密度的差異分離，如此，瓶蓋才會被好好回收。",
    Cigarette: "香菸盒由內層的紙盒、盒內襯的鋁紙，跟最外層的塑膠包裝膜組成，包裝膜應該丟入一般垃圾，紙類則可以回收。但是，濃縮了香菸內焦油與尼古丁的菸蒂不只不能回收，一旦流入下水道也會釋出到水體內，影響生物生存，所以記得菸頭也不要亂丟喔。",
    Glass: "玻璃即使號稱有好棒棒的高回收率，但因為質重所以業者回收意願低；因為易碎，所以回收運送過程中經常會破碎混雜，這些都會讓玻璃的重生之路無比艱辛。盡可能妥善收集、乾淨分類，家中的玻璃瓶盡可能重複使用，特殊的玻璃瓶（如米酒）交由業者回收還能換回退瓶費呢。",

  };

  return (
    <div className={styles.container}>
      <motion.h1 layoutId="header">{product}</motion.h1>
      <div onClick={() => router.back()} className={styles["image-container"]}>
        <motion.img
          layoutId={product}
          className={styles["big-image"]}
          src={product + ".PNG"}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
      
      {/* 詳細資訊直接顯示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.info}
      >
        <h2>{productInfo[product]}</h2>
       {/*<p>這是 {product} 的詳細介紹，您可以根據需求在此添加更多資訊！</p>*/}
        <Link href="/">
          <button className={styles["back-button"]}>返回主頁</button>
        </Link>
      </motion.div>
    </div>
  );
}
