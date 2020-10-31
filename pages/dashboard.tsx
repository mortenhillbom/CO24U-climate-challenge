import Head from "next/head";
import { BreadcrumbsItem, BreadcrumbsStateless } from "@atlaskit/breadcrumbs";
import DynamicTable from "@atlaskit/dynamic-table";
import PremiumIcon from "@atlaskit/icon/glyph/premium";
import PageHeader from "@atlaskit/page-header";
import { Main } from "@atlaskit/page-layout";
import { Container, Subtitle, Row, Space } from "components/StyledComponents";
import Metric from "components/Metric";
import { exampleSuppliers, exampleKPIs } from "mockData";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  const breadcrumbs = (
    <BreadcrumbsStateless>
      <BreadcrumbsItem text="Some project" key="Some project" />
      <BreadcrumbsItem text="Parent page" key="Parent page" />
    </BreadcrumbsStateless>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>TraX - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Main>
          <PageHeader breadcrumbs={breadcrumbs}>Volkswagen</PageHeader>
          <Row
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 24,
              paddingBottom: 24,
            }}
          >
            <Space />
            <Metric
              value={exampleKPIs.scope1}
              label="Aggregated emissions from suppliers"
              Icon={PremiumIcon}
            />
            <Space />
          </Row>

          <Subtitle>Supplier dashboard</Subtitle>
          <Space />
          <Row
            style={{
              justifyContent: "space-between",
              paddingTop: 24,
              paddingBottom: 24,
            }}
          >
            <div
              style={{
                height: 400,
                width: "50%",
                paddingTop: 70,
                background: "green",
                textAlign: "center",
              }}
            >
              MAP
            </div>
            <div style={{ width: "50%", marginLeft: 24 }}>
              <DynamicTable
                head={{
                  cells: [
                    { content: "Supplier name", key: "supplier" },
                    { content: "KG CO2/vehicle", key: "emissions" },
                  ],
                }}
                rows={exampleSuppliers}
              />
            </div>
          </Row>
        </Main>
      </Container>
    </div>
  );
}
