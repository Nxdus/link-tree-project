import { NextPage } from "next";
import Head from "next/head";
import Card from "@/components/card";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peeranut</title>
        <meta name="description" content="the treelink of paitong" />
      </Head>
      
      <Card />
    </>
  );
};

export default Index;
