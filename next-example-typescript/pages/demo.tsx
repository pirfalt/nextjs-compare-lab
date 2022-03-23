import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Link from "next/link";
import Example from "../components/ReactQueryExample";

export default function Demo() {
  return (
    <div>
      <Example />
    </div>
  );
}
