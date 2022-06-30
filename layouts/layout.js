import { Header } from "../components/header";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Anek+Latin:wght@100;300;400;500;700&display=swap');
        </style>
      </Head>
      <Header />
      {children}
    </>
  );
};
