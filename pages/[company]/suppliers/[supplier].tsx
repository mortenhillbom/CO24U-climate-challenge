import Head from "next/head";
import { BreadcrumbsItem, BreadcrumbsStateless } from "@atlaskit/breadcrumbs";
import DynamicTable from "@atlaskit/dynamic-table";
import PageHeader from "@atlaskit/page-header";
import { Main } from "@atlaskit/page-layout";
import { Container, Subtitle, Row, Space } from "components/StyledComponents";
import Metric from "components/Metric";
import { exampleSuppliers, exampleKPIs } from "mockData";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

export default function Supplier(): JSX.Element {
  const router = useRouter();
  const { supplier, company } = router.query;

  const breadcrumbs = (
    <BreadcrumbsStateless>
      <BreadcrumbsItem text={company as string} key="company" />
      <BreadcrumbsItem text="Suppliers" key="suppliers" />
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
          <PageHeader breadcrumbs={breadcrumbs}>{supplier}</PageHeader>
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
              iconName="emission"
            />
            <Metric
              value={exampleKPIs.taxonomyAlignment}
              label="Taxonomy alignment"
              iconName="green_earth"
            />
            <Metric
              value={exampleKPIs.scope2}
              label="Scope 1 + 2 emissions"
              iconName="emission"
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
              iconName="energy"
            />
            <Metric
              value={exampleKPIs.rawMaterial}
              label="Raw material"
              iconName="material"
            />
            <Metric
              value={exampleKPIs.transportation}
              label="Transportation"
              iconName="boat"
            />
            <Metric
              value={exampleKPIs.directEmissions}
              label="Direct emissions"
              iconName="emission"
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
            <img alt="map" src="/assets/map2.png" height={400} />
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
