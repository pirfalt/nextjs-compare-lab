import React from "react";
import logo from "./logo.svg";
import style from "./App.module.css";
import { Card } from "./Card";

function App() {
  return (
    <div className={style["App"]}>
      <header className={style["App-header"]}>
        <img src={logo} className={style["App-logo"]} alt="logo" />
      </header>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <div className={style.container}>
        <Card title="Fist" content="Card example" imgUrl={logo} />
        <Card title="Second" content="Card example" imgUrl={logo} />
        <Card title="Third" content="Card example" imgUrl={logo} />
        <Card title="Fist" content="Card example" imgUrl={logo} />
        <Card title="Second" content="Card example" imgUrl={logo} />
        <Card title="Third" content="Card example" imgUrl={logo} />
        <Card title="Fist" content="Card example" imgUrl={logo} />
        <Card title="Second" content="Card example" imgUrl={logo} />
        <Card title="Third" content="Card example" imgUrl={logo} />
        <Card title="Fist" content="Card example" imgUrl={logo} />
        <Card title="Second" content="Card example" imgUrl={logo} />
        <Card title="Third" content="Card example" imgUrl={logo} />
      </div>

      <a
        className={style["App-link"]}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React.
      </a>
    </div>
  );
}

export default App;
