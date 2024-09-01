// app/result/page.js

async function fetchQueryParams(key) {
    const res = await fetch(`https://echo.free.beeceptor.com/?key=${key}`);
    const data = await res.json();
    return data.parsedQueryParams;
  }
  
  export default async function ResultPage({ searchParams }) {
    const key = searchParams.key;
    const parsedQueryParams = await fetchQueryParams(key);
  
    return (
      <div>
        <h1>Risultato della chiamata API</h1>
        {parsedQueryParams ? (
          <div>
            <p>Key: {parsedQueryParams.key}</p>
          </div>
        ) : (
          <p>Nessun dato trovato.</p>
        )}
      </div>
    );
  }
  