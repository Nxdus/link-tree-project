import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="flex justify-center items-center h-screen bg-[#1B1B1B] font-Rubik">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
