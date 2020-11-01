import { Row, Col } from "./StyledComponents";

type MetricProps = {
  value: number;
  label: string;
  // eslint-disable-next-line react/require-default-props
  iconName?: string;
};
const Metric = ({ value, label, iconName }: MetricProps) => {
  return (
    <Row style={{ alignItems: "baseline" }}>
      <img alt={iconName} src={`/assets/${iconName}.png`} height="60" />
      <Col>
        <h1 style={{ margin: 0 }}>{value}%</h1>
        <h3 style={{ margin: 0, fontWeight: 400 }}>{label}</h3>
      </Col>
    </Row>
  );
};

export default Metric;
