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
    tableWrapper: {
      style: {
        borderRadius: theme.borderRadius,
      },
    },
    header: {
      style: {
        fontSize: "2rem",
        fontWeight: 700,
      },
    },
  };

  return (
    <DataTable
      {...props}
      customStyles={customStyles}
      pagination
      paginationPerPage={25}
      paginationRowsPerPageOptions={[10, 25, 50]}
    />
  );
};
export default StyledDataTable;
