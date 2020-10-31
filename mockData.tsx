import { StatusDot } from "components/StyledComponents";

export const exampleSuppliers = [
  {
    cells: [
      {
        content: (
          <>
            <StatusDot color="red" />
            BMW
          </>
        ),
      },
      { content: "100" },
    ],
  },
  {
    cells: [
      {
        content: (
          <>
            <StatusDot color="red" />
            Audi
          </>
        ),
      },
      { content: "100" },
    ],
  },
  {
    cells: [
      {
        content: (
          <>
            <StatusDot color="yellow" />
            Something
          </>
        ),
      },
      { content: "100" },
    ],
  },
  {
    cells: [
      {
        content: (
          <>
            <StatusDot color="green" />
            Whatever
          </>
        ),
      },
      { content: "100" },
    ],
  },
];

export const exampleKPIs = {
  scope1: 48,
  scope2: 67,
  taxonomyAlignment: 84,
  energyConsumption: 9,
  rawMaterial: 21,
  transportation: 17,
  directEmissions: 53,
};
