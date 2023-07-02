import Router, { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
};
export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);

  if (error) {
    return <p>Error loading character.</p>;
  }

  return (
    <Layout>
      {data ? (
        <Card
          id={id}
          name={data.name}
          height={data.height}
          eyeColor={data.eye_color}
          birthYear={data.birth_year}
        />
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}
