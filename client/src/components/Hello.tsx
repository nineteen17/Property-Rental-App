import useHello from "../hooks/useHello";

const Hello = () => {
  const { data, isLoading, isError } = useHello();

  console.log(data);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching...</div>}
      {data && <div>{data}</div>}
    </div>
  );
};

export default Hello;
