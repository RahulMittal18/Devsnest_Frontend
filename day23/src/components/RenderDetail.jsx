import useFetch from "./useFetch";

export default function RenderDetail({ user }) {
  const [data] = useFetch(
    `https://codeforces.com/api/user.info?handles=${user}`
  );

  data && console.log(data.result[0].rating);

  return (
    <>
      <h2>Rating: {data && data.result[0].rating}</h2>

      <h2>Rank: {data && data.result[0].rank} </h2>
    </>
  );
}
