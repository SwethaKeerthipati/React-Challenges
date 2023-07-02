// import Router, { useRouter } from "next/router";
// import Card from "../../components/Card";
// import Layout from "../../components/Layout";
// import useSWR from "swr";
// const fetcher = async (url) => {
//   const response = await fetch(url);
//   if (!response.ok) {
//     const error = new Error("An error occurred while fetching the data.");
//     error.status = response.status;
//     throw error;
//   }
//   const data = await response.json();
//   return data;
// };
// export default function Character() {
//   const router = useRouter();
//   const { id } = router.query;
//   const { data, error } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);

//   if (error) {
//     return <p>Error loading character.</p>;
//   }

//   return (
//     <Layout>
//       <Card
//         id={id}
//         name={data.name}
//         height={data.height}
//         eyeColor={data.eye_color}
//         birthYear={data.birth_year}
//       />
//     </Layout>
//   );
// }

import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
