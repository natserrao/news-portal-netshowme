import Header from "../components/Header";
import { api } from "../services/api";
import styles from "../styles/Id.module.css";

const OneNew = ({ news }) => {
  return (
    <>
      <Header />

      <section className={styles.section}>
        <article className={styles.article}>
          <h2 className={styles.h2}>{news?.title}</h2>
          <h3 className={styles.h3}>{news?.description}</h3>
          <span className={styles.span}>Fonte: {news.author}</span>
          <img className={styles.img} src={news?.image} />
          <p className={styles.p}>{news?.content}</p>
          <h5 className={styles.h5}>Data de publicação:{news.date}</h5>
        </article>
      </section>
    </>
  );
};

export default OneNew;

export const getStaticPaths = async () => {
  const response = await api.get("/news");

  const paths = response.data.map((news) => ({
    params: {
      id: news.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await api.get(`/news/${params.id}`);

  return {
    props: {
      news: response.data,
    },
  };
};
