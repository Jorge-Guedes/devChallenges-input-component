import React from "react";

import Head from "../Components/Helper/Head";
import Input from "../Components/Input/Input";
import Footer from "../Components/Footer";

import InputText from "../Components/InputText";
import InputSelect from "../Components/InputSelect";
import InputBox from "../Components/InputBox";

import useForm from "../Hooks/useForm";

import styles from "./Inputs.module.css";
import styles2 from "../Components/customize.module.css";

const Inputs = () => {
  const label = useForm();
  const placeholder = useForm();
  const error = useForm();
  const size = useForm();
  const disabled = useForm();

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
        <Input value="text" classGrid="column_3" />
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

      <section className={styles2.customizeComponent}>
        <h2 className="title">Customize</h2>
        <div className={styles2.componentGenerate}>
          <Input
            hiddenTag
            label={label.value}
            placeholder={placeholder.value}
            error={error.box}
            disabled={disabled.box}
            size={size.value}
          />
        </div>
        <div className={styles2.containerInputs}>
          <InputText label="label" {...label} />
          <InputText label="placeholder" {...placeholder} />
          <div className={styles2.input_group}>
            <InputBox label="error" {...error} />
            <InputBox label="disabled" {...disabled} />
          </div>
          <InputSelect label="size" {...size} sizes />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Inputs;
