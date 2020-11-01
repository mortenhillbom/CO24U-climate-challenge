/* eslint-disable jsx-a11y/no-static-element-interactions */
import Head from "next/head";
import { BreadcrumbsItem, BreadcrumbsStateless } from "@atlaskit/breadcrumbs";
import DynamicTable from "@atlaskit/dynamic-table";
import PageHeader from "@atlaskit/page-header";
import { Main } from "@atlaskit/page-layout";
import { Container, Subtitle, Row, Space } from "components/StyledComponents";
import Metric from "components/Metric";
import { exampleSuppliers, exampleKPIs } from "mockData";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Home(): JSX.Element {
  const router = useRouter();
  const { company } = router.query;

  const breadcrumbs = (
    <BreadcrumbsStateless>
      <BreadcrumbsItem text="Home" key="home" />
      <BreadcrumbsItem text="Overview" key="overview" />
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
          <PageHeader breadcrumbs={breadcrumbs}>{company}</PageHeader>
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
              iconName="green_earth"
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
            <img alt="map" src="/assets/map.png" height={400} />
            <div
              style={{ width: "50%", marginLeft: 24, cursor: "pointer" }}
              onClick={() =>
                router.push(`/${company}/suppliers/Stella Steel ABG`)
              }
            >
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
