function DetailGenre({ data }) {
  return (
    <>
      {data && (
        <>
          {data.map((gen, i) => {
            return <span key={i}>{gen.name}</span>;
          })}
        </>
      )}
    </>
  );
}

export default DetailGenre;
