const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
console.log(`📕 arr - 2:app.jsx \n`, arr);

const App = () => (
  <>
    {arr.map((item, index) => (
      <p>{`${index}: ${item}`}</p>
    ))}
  </>
);

export default App;
