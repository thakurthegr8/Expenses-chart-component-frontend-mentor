import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { data } from "../store/data";

export default function Home() {
  return (
    <main className="main">
      <Head >
        <title>Expenses Chart Component | Frontend Mentor</title>
        <link
          href={`https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=IBM+Plex+Sans:wght@300;600;700&family=Nunito:wght@800&display=swap`}
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon-32x32.png"/>
      </Head>
      <div className="card-container scale-105">
        <div className="flex justify-between items-center w-5/6 bg-accent-primary-soft-red text-white p-6 rounded-xl">
          <div className="flex flex-col">
            <span className="text-sm">My balance</span>
            <span className="text-2xl font-semibold">$921.48</span>
          </div>
          <div className="flex justify-center items-center">
            <Image src="/logo.svg" width={72} height={48} alt="image"/>
          </div>
        </div>
        <div className="bg-white rounded-xl  w-5/6 p-6">
          <div className="flex flex-col">
            <p className="text-xl text-accent-neutral-dark-brown font-semibold">
              Spending - Last 7 days
            </p>
            <div className="divide-y">
              <div className="flex space-x-2 justify-between items-end py-8 ">
                {data.map((item, idx) => (
                  <div key={idx} className="bar-details">
                    <span className="stat-amount">{`$${item.amount}`}</span>
                    <span
                      className="stat-bar"
                      style={{ height: `${2 * item.amount}px` }}
                    ></span>
                    <span className="text-center">{item.day}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <div className="flex flex-col">
                  <span className="text-sm text-accent-neutral-medium-brown">
                    Total this month
                  </span>
                  <span className="text-3xl font-semibold text-accent-neutral-dark-brown">
                    $478.33
                  </span>
                </div>
                <div className="flex flex-col justify-center items-end">
                  <span className="text-accent-neutral-dark-brown font-bold text-sm">
                    +2.4%
                  </span>
                  <span className="text-sm text-accent-neutral-medium-brown">
                    from last month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
