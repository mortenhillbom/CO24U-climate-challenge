import { Container } from "components/StyledComponents";
import Head from "next/head";
import Form, { Field } from "@atlaskit/form";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import PageHeader from "@atlaskit/page-header";
import { Main } from "@atlaskit/page-layout";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function DataInput(): JSX.Element {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Trax - Log in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Main>
          <PageHeader>Log in</PageHeader>
          <Form
            onSubmit={(data: { companyname: string }) =>
              router.push(`${data?.companyname}`)
            }
          >
            {({ formProps }) => (
              <form {...formProps}>
                <Field
                  name="companyname"
                  defaultValue=""
                  label="Company name"
                  isRequired
                >
                  {({ fieldProps }) => <TextField {...fieldProps} />}
                </Field>
                <Field
                  name="password"
                  defaultValue=""
                  label="Password"
                  isRequired
                  transform={(s) =>
                    s
                      .toString()
                      .split("")
                      .map(() => "*")
                      .join("")
                  }
                >
                  {({ fieldProps }) => <TextField {...fieldProps} />}
                </Field>
                <Button
                  type="submit"
                  appearance="primary"
                  style={{ marginTop: 24 }}
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
