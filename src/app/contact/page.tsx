import Head from "next/head";
import Header from '../../components/Header'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <Head>
        <title>My Portfolio | Data Scientist & Developer</title>
        <meta name="description" content="Aspiring Data Scientist & Software Developer" />
      </Head>

      <Header />

      <h1>Hello contact page</h1>
    </div>
  );
}