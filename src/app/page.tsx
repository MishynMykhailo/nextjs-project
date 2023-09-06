import Image from "next/image";
import styles from "./page.module.scss";
import ProductList from "@/components/ProductList/ProductList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <ProductList />
      </div>
    </main>
  );
}
