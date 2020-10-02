import React from "react";
import DataTable, {
  IDataTableProps,
  IDataTableStyles,
} from "react-data-table-component";
import { useThemeContext } from "../../context/ThemeContext";

const StyledDataTable = <T extends unknown = any>(
  props: IDataTableProps<T>
) => {
  const theme = useThemeContext();

  const customStyles: IDataTableStyles = {
    // tableWrapper: {
    //   style: {
    //     marginTop: "3rem",
    //     marginBottom: "3rem",
    //     borderRadius: theme.borderRadius,
    //   },
    // },
    // headCells: {
    //   style: {
    //     color: theme.colors.white,
    //     backgroundColor: theme.colors.main,
    //   },
    // },
    // rows: {
    //   style: {
    //     backgroundColor: "#ddd",
    //   },
    //   highlightOnHoverStyle: {
    //     backgroundColor: theme.colors.secondary,
    //     color: theme.colors.white,
    //   },
    // },
  };

  return <DataTable {...props} customStyles={customStyles} />;
};
export default StyledDataTable;
