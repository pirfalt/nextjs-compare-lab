import logo from "./logo512.png";
import Image from "next/image";

export default function Card(props: {
  title: string;
  description: string;
  href: string;
  skipImg?: boolean;
}) {
  return (
    <a className="card" href={props.href}>
      <style jsx>
        {`
          .card {
            margin: 1rem;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            max-width: 300px;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h2 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }
        `}
      </style>
      <h2 className="title">{props.title} &rarr;</h2>
      <p className="description">{props.description}</p>
      {props.skipImg ? null : <Image alt="React logo" {...logo} />}
    </a>
  );
}
