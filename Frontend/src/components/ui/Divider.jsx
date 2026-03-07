export default function Divider({ label = "OR" }) {
  return (
    <div style={styles.container}>
      <div style={styles.line}></div>
      <span style={styles.text}>{label}</span>
      <div style={styles.line}></div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "0px 0",
  },
  line: {
    flex: 1,
    height: "1px",
    backgroundColor: "#ccc",
  },
  text: {
    margin: "0 12px",
    fontSize: "14px",
    color: "#666",
    whiteSpace: "nowrap",
  },
};