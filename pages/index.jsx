import { api } from "../services/api";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";

const Home = ({ news }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Header />
        <ul className={styles.ul}>
          {news.map((news) => (
            <Link className={styles.link} key={news.id} href={`/${news.id}`}>
              <article className={styles.article} key={news.id}>
                <h4 className={styles.h4}>{news.category}</h4>
                <h2 className={styles.h2}>{news.title}</h2>
                <p className={styles.p}>{news.description}</p>
                <span className={styles.span}>Fonte: {news.author}</span>
                <h5 className={styles.h5}>Data: {news.date}</h5>
              </article>
            </Link>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await api.get("/news");

  return {
    props: {
      news: response.data,
    },
  };
};

export default Home;
