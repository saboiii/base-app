import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Basic | Welcome</title>
        <meta name="description" content="Sample website for future use." />
      </Head>
      <div className="flex flex-col md:flex-row justify-between py-24 px-12 md:px-28">
        <div className="flex flex-col w-full md:w-1/2 py-8">
          <h1 className="animate-title">Making a webpage?</h1>
          <p className="font-numans mt-12 leading-6 md:pr-24 animate-fade-in-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut pharetra enim, sed eleifend nisl.
            Suspendisse maximus dui a justo consequat, eget pretium arcu commodo. Nulla bibendum, metus vitae finibus
            semper, libero sem efficitur urna, a tincidunt neque dolor ut lacus.
          </p>
          <Link href='/' className="button-2 mt-8 w-[150px] animate-fade-in-2">Useless button.</Link>
        </div>
        <div className="flex w-full md:w-1/2 justify-center items-center p-4 animate-fade-in-3">
          <Image
            alt='Illustration of a laptop, a tablet, and a coffee with gray and neon green accents.'
            src='/illustration.png'
            width={950}
            height={75}
            className="flex object-cover mt-24 md:mt-0"
          />
        </div>
      </div>
      <Services />
      <Subscribe />
    </Layout>
  );
}
