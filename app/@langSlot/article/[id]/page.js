async function fetchData(id) {
  return "fetch async data for article id: " + id;
}
export default async function Page({ params }) {
  const data = await fetchData(params.id);

  return <>@langSlot {data}</>;
}
