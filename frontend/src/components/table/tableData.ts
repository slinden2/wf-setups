import { IDataTableColumn } from "react-data-table-component";

export const columns: IDataTableColumn[] = [
  {
    name: "Track",
    selector: "track",
    sortable: true,
  },
  {
    name: "Vehicle",
    selector: "vehicle",
    sortable: true,
    width: "135px",
  },
  {
    name: "Power",
    selector: "power",
    center: true,
    width: "65px",
  },
  {
    name: "Susp",
    selector: "suspension",
    center: true,
    width: "60px",
  },
  {
    name: "Gears",
    selector: "gear",
    center: true,
    width: "60px",
  },
  {
    name: "Diff",
    selector: "differential",
    center: true,
    width: "60px",
  },
  {
    name: "Brake",
    selector: "brake",
    center: true,
    width: "60px",
  },
];
