import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/Date"
import { getSortedPostsData } from "../utils/posts";

export default function Home({ postsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Ilia. I'm a fullstack developer and interpreter (English/Russian)</p>
        <Link href={"/profile/my"}>Profile</Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title }) => (
            
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsData = getSortedPostsData();

  return {
    props: {
      postsData,
    },
  };
}
