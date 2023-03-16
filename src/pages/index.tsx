import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ContactInfo from "@/components/ContactInfo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Will Ashe - Software Engineer - Austin, TX</title>
        <meta
          name="description"
          content=">Will Ashe - Software Engineer - Austin, TX"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.home}>
          <div className={styles.intro}>
            <h1>Will Ashe</h1>
            <h2>
              Software Engineer
              <br />
              Austin, TX
            </h2>

            <ContactInfo />
          </div>

          {/* <Skillset /> */}
        </div>
      </main>
    </>
  );
}
