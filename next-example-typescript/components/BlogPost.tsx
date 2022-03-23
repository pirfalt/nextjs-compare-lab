import Head from "next/head";
import React, { ReactNode } from "react";

export default function BlogPost(props: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="">
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Blog post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{props.children}</main>
    </div>
  );
}
