import Head from "next/head";

export default function Blogpost() {
  return (
    <div className="">
      <Head>
        <title>NextJS lab summary</title>
        <meta name="description" content="Blogpost" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>NextJS lab summary</h1>
        <p>Short summary of the nextjs lab.</p>
      </main>
    </div>
  );
}
