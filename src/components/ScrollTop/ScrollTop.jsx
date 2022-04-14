function ScrollTop({ children }) {
  const style = {
    position: "absolute",

    lineHeight: "50px",
    borderRadius: 8,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  };
  return (
    <div>
      {children}
      <button style={style}>go top</button>
    </div>
  );
}

export default ScrollTop;
