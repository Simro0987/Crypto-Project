import { usePrices } from "../hooks/usePrices.ts";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

function Index() {
  const { prices, isLoading } = usePrices();

  if (isLoading || !prices) {
    return (
      <div className="screen screen--center">
        <div className="loader">
          <div className="spinner" role="status" aria-label="Loading" />
          <p className="loader__text">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <main className="dashboard">
        <h1 className="dashboard__title">Crypto Dashboard</h1>
        <div className="cards">
          {prices.map((coin) => (
            <article key={coin.symbol} className="card">
              <div className="card__header">
                <span className="card__symbol">{coin.symbol}</span>
                <span className="card__name">{coin.name}</span>
              </div>
              <p className="card__price">{formatPrice(coin.price)}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Index;
