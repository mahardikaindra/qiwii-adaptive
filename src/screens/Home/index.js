import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

function Home() {
  const url = "https://app.qiwii.id/files/thumb/179d7a995690b4c/720/360/fit";
  return (
    <div>
      <Header />
      <Hero url={url} alt="Qiwii" />
    </div>
  );
}

export default Home;
