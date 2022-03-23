import React from "react";
import style from "./Card.module.css";

export function Card(props: {
  title: string;
  content: string;
  imgUrl?: string;
}) {
  return (
    <div className={style.card}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <img className={style.cardImg} src={props.imgUrl} alt={props.title} />
    </div>
  );
}
