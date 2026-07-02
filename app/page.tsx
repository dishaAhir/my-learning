import Sidebar from "../componenets/Sidebar/Sidebar";
import styles from "./page.module.scss"
export default function Home() {
  return (
        <main className={styles.main}>
      <Sidebar />
    </main>
  );
}
