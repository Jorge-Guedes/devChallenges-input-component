import React from "react";

import Head from "../Components/Helper/Head";
import Footer from "../Components/Footer";
import Input from "../Components/Input/Input";

import styles from "./Inputs.module.css";

const Inputs = () => {
  return (
    <main className="container">
      <Head title="Inputs" description="Components page dedicated to Inputs" />
      <h1 className="title">Inputs</h1>
      <section className={styles.menuInputs}>
        <Input />
        <Input hover />
        <Input focus />
        <Input error />
        <Input error hover />
        <Input error focus />
        <Input disabled classGrid="column_3" />
        <Input helperText="Some interesting text" />
        <Input helperText="Some interesting text" error />
        <Input startIcon="phone" classGrid="column_2" />
        <Input endIcon="lock" />
        <Input value="Text" classGrid="column_3" />
        <Input size="sm" />
        <Input size="md" />
        <Input size="lg" />
        <Input fullWidth />
        <Input multiline row="4" />
      </section>
      <p className="ref">
        Icons:{" "}
        <a
          href="https://material.io/resources/icons/?style=round"
          target="_blank"
        >
          https://material.io/resources/icons/?style=round
        </a>
      </p>

      <Footer />
    </main>
  );
};

export default Inputs;
