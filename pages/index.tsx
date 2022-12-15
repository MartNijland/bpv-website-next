import type { NextPage } from "next";
import { Link } from "react-router-dom";
import Head from "next/head";
import Headers from "../components/Headers";
import Hero, { queryFragment as heroQueryFragment } from "../components/Hero";
import Informatie, {
  queryFragment as informatieQueryFragment,
} from "../components/Informatie";
import BpvTaakEen, {
  queryFragment as bpvtaakeenQueryFragment,
} from "../components/BpvTaakEen";
import KlantenProducten from "../components/KlantenProducten";
import Products from "../components/Products";
import { motion, useScroll } from "framer-motion";
import OrgChart from "../components/OrgChart";
import CursorAnimation from "../components/CursorAnimation";
import { useEffect, useState, CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const fetchGraphQL = async (query: string, variables: object = {}) => {
  const res = await global.fetch("https://martnijland.wiredev.nl/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
};

export const getServerSideProps = async () => {
  const GET_DATA = `
    {
      entry(slug: "home") {
        title
        ... on home_home_Entry {
          ${heroQueryFragment}
          ${informatieQueryFragment}
          ${bpvtaakeenQueryFragment}
        }
      }
    }
    `;

  return {
    props: {
      data: await fetchGraphQL(GET_DATA),
    },
  };
};

const Home: NextPage = ({ data }: any) => {
  const { title } = data.entry;
  const { scrollYProgress } = useScroll();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const override: CSSProperties = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="bg-[#18232E] text-white h-screen snap-y snap-mandatory overflow-auto scrollbar scrollbar-thumb-[#7962FA] scrollbar-track-[#1f2c3a]">
      {loading ? (
        <PropagateLoader
          size={20}
          color={"#7962FA"}
          loading={loading}
          cssOverride={override}
        />
      ) : (
        <div>
          <CursorAnimation />

          <Head>
            <title>{title}</title>
          </Head>

          <Headers />

          <section id="hero">
            <Hero {...data.entry} />
          </section>

          <section id="informatie">
            <Informatie {...data.entry} />
          </section>

          <section id="klanten">
            <KlantenProducten />
          </section>

          <section id="products">
            <Products />
          </section>

          <section>
            <OrgChart />
          </section>

          <section>
            <BpvTaakEen {...data.entry} />
          </section>
        </div>
      )}
    </div>
  );
};
export default Home;
