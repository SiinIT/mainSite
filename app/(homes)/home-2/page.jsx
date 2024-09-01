export default function Home() {
    return (
      <div>
        <h1>Inserisci un valore</h1>
        <form action="/result" method="get">
          <input
            type="text"
            name="key"
            placeholder="Inserisci qualcosa"
          />
          <button type="submit">Invia</button>
        </form>
      </div>
    );
  }
  