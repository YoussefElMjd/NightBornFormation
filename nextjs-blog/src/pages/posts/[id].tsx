import Date from "@/components/date";
import Layout from "../../components/layout";
import Data, { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "@/styles/utils.module.css";

interface Param{
  id: number;
}
export default function Post({ postData }: { postData: Data }) {
  return (
    <Layout home>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params } : {params: Param }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
