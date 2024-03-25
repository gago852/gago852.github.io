const App = () => {
  const name = 'Marico';

  const x = 10;
  const y = 20;

  const names = ['manuel', 'seerrs', 'menesuia'];

  const loggedIn = false;
  const styles = {
    color: 'red',
    fontSize: '55px',
  };

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={{ color: 'red', fontSize: '24px' }}>Hello {name}</p>
      <p style={styles}>
        la suma de {x} mas {y} es {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {loggedIn ? <h1>hola hente</h1> : <h1>hola mancos</h1>}
    </>
  );
};

export default App;
