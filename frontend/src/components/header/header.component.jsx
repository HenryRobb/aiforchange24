import Head from 'next/head'



export default function Header({ title = "Portfolio" }) {
  const titleValue = `${title} | Sean Morrison`;
  return (
    <>
      <Head>
        <title>{titleValue}</title>
        <meta property="og:title" content="Sean Morrison" key="title" />
        <meta name="description" content="Portfolio | Sean Morrison" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>hi</p>
      </div>
    </>
  );
}
