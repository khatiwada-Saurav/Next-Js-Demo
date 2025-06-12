import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link prefetch={false} href="/demo">
          Demo
        </Link>
      </main>
    </div>
  );
}
