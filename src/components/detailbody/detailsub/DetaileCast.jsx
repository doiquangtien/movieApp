function DetaileCast({ data }) {
  return (
    <>
      {data && (
        <>
          {data.slice(0, 10).map((cast, i) => {
            return <span key={i}>{cast.name || cast.original_name},</span>;
          })}
        </>
      )}
    </>
  );
}

export default DetaileCast;
