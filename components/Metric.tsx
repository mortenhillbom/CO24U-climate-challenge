import { IconProps } from "@atlaskit/icon";
import { ComponentType } from "react";
import { Row, Col } from "./StyledComponents";

type MetricProps = {
  value: number;
  label: string;
  // eslint-disable-next-line react/require-default-props
  Icon?: ComponentType<IconProps> | ComponentType;
};
const Metric = ({ value, label, Icon }: MetricProps) => {
  return (
    <Row style={{ alignItems: "baseline" }}>
      <Icon label={label} size="large" />
      <Col>
        <h1 style={{ margin: 0 }}>{value}%</h1>
        <h3 style={{ margin: 0, fontWeight: 400 }}>{label}</h3>
      </Col>
    </Row>
  );
};

export default Metric;
