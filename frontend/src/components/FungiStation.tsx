import { useEffect, useState } from "react";

interface Fungi {
  id: string;
  name: string;
  category: string;
  price: string;
}

const FungiStation = () => {
  const [fungiList, setFungiList] = useState<Fungi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/fungi")
      .then((res) => {
        if (!res.ok) {
          throw new Error("サーバーからのデータ取得に失敗しました");
        }
        return res.json();
      })
      .then((data: Fungi[]) => {
        setFungiList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <header style={{ borderBottom: "2px solid #333", paddingBottom: "10px" }}>
        <h1 style={{ margin: 0, color: "#2c3e50" }}>🍄 FUNGI-STATION 🍄</h1>
        <p style={{ margin: "5px 0 0", color: "#7f8c8d" }}>
          菌類・粘菌専門のモックECストア
        </p>
      </header>

      <main style={{ marginTop: "20px" }}>
        <h1>商品ラインナップ(test)</h1>
        {loading && <p>データを読み込み中...</p>}
        {error && <p style={{ color: "red" }}>エラー: {error}</p>}

        {!loading && !error && (
          <div
            style={{
              display: "grid",
              gap: "15px",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
          >
            {fungiList.map((fungi) => (
              <div
                key={fungi.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    background: "#e0f7fa",
                    color: "#006064",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {fungi.category}
                </span>
                <h3 style={{ margin: "10px 0 5px" }}>{fungi.name}</h3>
                <p style={{ margin: 0, fontWeight: "bold", color: "#e67e22" }}>
                  ¥{fungi.price} (税込)
                </p>
                <button
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "8px",
                    background: "#2c3e50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  カートに入れる
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default FungiStation;
