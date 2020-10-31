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
          <PageHeader breadcrumbs={breadcrumbs}>Stella Steel ABG</PageHeader>
          <Subtitle>Sustainability KPI overview</Subtitle>
          <Space />
          <Row
            style={{
              justifyContent: "space-between",
              paddingTop: 24,
              paddingBottom: 24,
            }}
          >
            <Metric
              value={exampleKPIs.scope1}
              label="Scope 1 emissions"
              Icon={PremiumIcon}
            />
            <Metric
              value={exampleKPIs.taxonomyAlignment}
              label="Taxonomy alignment"
              Icon={PremiumIcon}
            />
            <Metric
              value={exampleKPIs.scope2}
              label="Scope 1 + 2 emissions"
              Icon={PremiumIcon}
            />
          </Row>
          <Subtitle>Emission contribution</Subtitle>
          <Space />
          <Row
            style={{
              justifyContent: "space-between",
              paddingTop: 24,
              paddingBottom: 24,
            }}
          >
            <Metric
              value={exampleKPIs.energyConsumption}
              label="Energy consumption"
              Icon={PremiumIcon}
            />
            <Metric
              value={exampleKPIs.rawMaterial}
              label="Raw material"
              Icon={PremiumIcon}
            />
            <Metric
              value={exampleKPIs.transportation}
              label="Transportation"
              Icon={PremiumIcon}
            />
            <Metric
              value={exampleKPIs.directEmissions}
              label="Direct emissions"
              Icon={PremiumIcon}
            />
          </Row>
          <Subtitle>Customer dashboard</Subtitle>
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
                    { content: "Customer name", key: "customer" },
                    { content: "Taxonomy alignment", key: "alignment" },
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
