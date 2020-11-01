import { Container } from "components/StyledComponents";
import Head from "next/head";
import Form, { Field } from "@atlaskit/form";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import PageHeader from "@atlaskit/page-header";
import { Main } from "@atlaskit/page-layout";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function DataInput(): JSX.Element {
  const router = useRouter();
  const { company } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Trax - Data input</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container style={{ maxWidth: 500 }}>
        <Main>
          <PageHeader>Input data</PageHeader>
          <Form onSubmit={(data) => console.log("form data", data)}>
            {({ formProps }) => (
              <form {...formProps}>
                <Field
                  name="companyname"
                  defaultValue={company}
                  label="Company name"
                  isRequired
                >
                  {({ fieldProps }) => <TextField {...fieldProps} />}
                </Field>
                <Field
                  name="industry"
                  defaultValue=""
                  label="Industry"
                  isRequired
                >
                  {({ fieldProps }) => <TextField {...fieldProps} />}
                </Field>
                <Field
                  name="segment"
                  defaultValue=""
                  label="Segment"
                  isRequired
                >
                  {({ fieldProps }) => <TextField {...fieldProps} />}
                </Field>
                <Field
                  name="country"
                  defaultValue=""
                  label="Country"
                  isRequired
                >
                  {({ fieldProps }) => <TextField {...fieldProps} />}
                </Field>
                <Field
                  name="energy1"
                  defaultValue=""
                  label="Energy consumption"
                  isRequired
                >
                  {({ fieldProps }) => <TextField {...fieldProps} />}
                </Field>
                <Field
                  name="energy2"
                  defaultValue=""
                  label="Energy source"
                  isRequired
                >
                  {({ fieldProps }) => <TextField {...fieldProps} />}
                </Field>
                <Button
                  style={{ marginTop: 24 }}
                  type="submit"
                  appearance="primary"
                >
                  Submit
                </Button>
              </form>
            )}
          </Form>
        </Main>
      </Container>
    </div>
  );
}
