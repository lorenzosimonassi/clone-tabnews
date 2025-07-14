function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        width: "full",
        padding: "20px",
        boxSizing: "border-box",
        fontFamily: "helvetica",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          maxWidth: "800px",
          margin: "0 auto",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>João ⚔️ 'Sir David Beckham', Here We Go!</h1>
        <h3>
          É do FUTEBOL REAL! João e Futebol Real chegam num acordo de 21.500.000
          milhões de euros em um contrato de 4 anos com salário de 70mil euros
          mensalmente.
        </h3>

        <video width="700" height="500" loop autoPlay muted>
          <source src="/images/joaovideo.mp4" type="video/mp4" />
        </video>

        <audio autoPlay loop>
          <source src="/images/obsessao.mp3" type="audio/mpeg" />
        </audio>

        <div
          style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}
        >
          <p>
            O mestre da física, o rei do passe preciso, o goleiro com crise de
            ansiedade, o inimigo das interceptações!{" "}
          </p>
          <p>O 'chef' 🧑‍🍳 que cozinha seus adversários no mental 🧠.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
