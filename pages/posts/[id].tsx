import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../utils/posts";
import utilStyles from "../../styles/utils.module.css"
import Head from "next/head";
import Date from "../../components/Date";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({ postData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}><Date dateString={postData.date}></Date></div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
}

export const getStaticPaths:GetStaticPaths = async() => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps:GetStaticProps = async({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
