import Image from "next/image";
import styles from "./page.module.css";
import About from "./About/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
          <p>Sample Next.js page</p> 
          <br>
          </br>   
          <a href="/About">About</a>
          &nbsp;
          <a href="/Contact">Contact</a>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
