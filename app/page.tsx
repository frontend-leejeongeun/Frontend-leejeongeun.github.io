import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>이정은의 블로그</title>
        <meta
          name="description"
          content="Next.js + TypeScript로 만든 개인 블로그"
        />
      </Head>
      <main>
        <h1>안녕하세요! 🚀</h1>
        <p>Next.js와 GitHub Pages로 만든 블로그입니다.</p>
      </main>
    </>
  );
}
