import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Page2() {
  return (
    <>
      <Head>
        <script
          data-cfasync="false"
          type="text/javascript"
          src="https://cdn.judge.me/assets/installed.js"
          async
        />
        <script
          data-cfasync="false"
          type="text/javascript"
          src="/widget_preloader.js"
          async
        />
      </Head>
      <div className={styles.container}>
        // div that script uses to render
        <div className="jdgm-verified-badge-wrapper" />
        Page 2
      </div>
    </>
  );
}
