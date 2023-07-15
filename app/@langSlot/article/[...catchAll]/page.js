async function fetchData(id) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return "fetch async data for article id: " + id;
}
export default async function Page({ params }) {
  const data = await fetchData(params.id);

  return <>@langSlot {data}</>;
}
