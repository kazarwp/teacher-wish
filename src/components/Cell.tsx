import { useCallback, useState, useRef, useMemo } from "react";
import { dataTable } from "../data/data";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import {
  ColDef,
  GetRowIdFunc,
  GetRowIdParams,
} from "ag-grid-community";

export const Cell: React.FC = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData] = useState([
    {
      id: "lesson1",
      rowHeader: "1",
      rowHeader2: "08:00-09:20",
      monday: "0",
      tuesday: "0",
      wednesday: "0",
      thursday: "0",
      friday: "0",
      saturday: "0",
      sunday: "0",
    },
    {
      id: "lesson2",
      rowHeader: "2",
      rowHeader2: "09:30-10:50",
      monday: "0",
      tuesday: "0",
      wednesday: "0",
      thursday: "0",
      friday: "0",
      saturday: "0",
      sunday: "0",
    },
    {
      id: "lesson3",
      rowHeader: "3",
      rowHeader2: "11:10-12:30",
      monday: "0",
      tuesday: "0",
      wednesday: "0",
      thursday: "0",
      friday: "0",
      saturday: "0",
      sunday: "0",
    },
    {
      id: "lesson4",
      rowHeader: "4",
      rowHeader2: "12:40-14:00",
      monday: "0",
      tuesday: "0",
      wednesday: "0",
      thursday: "0",
      friday: "0",
      saturday: "0",
      sunday: "0",
    },
    {
      id: "lesson5",
      rowHeader: "5",
      rowHeader2: "14:10-15:30",
      monday: "0",
      tuesday: "0",
      wednesday: "0",
      thursday: "0",
      friday: "0",
      saturday: "0",
      sunday: "0",
    },
    {
      id: "lesson6",
      rowHeader: "6",
      rowHeader2: "15:40-17:00",
      monday: "0",
      tuesday: "0",
      wednesday: "0",
      thursday: "0",
      friday: "0",
      saturday: "0",
      sunday: "0",
    },
    {
      id: "lesson7",
      rowHeader: "7",
      rowHeader2: "17:10-18:30",
      monday: "0",
      tuesday: "0",
      wednesday: "0",
      thursday: "0",
      friday: "0",
      saturday: "0",
      sunday: "0",
    },
    {
      id: "lesson8",
      rowHeader: "8",
      rowHeader2: "18:40-20:00",
      monday: "0",
      tuesday: "0",
      wednesday: "0",
      thursday: "0",
      friday: "0",
      saturday: "0",
      sunday: "0",
    },
    {
      id: "lesson9",
      rowHeader: "9",
      rowHeader2: "20:10-21:30",
      monday: "0",
      tuesday: "0",
      wednesday: "0",
      thursday: "0",
      friday: "0",
      saturday: "0",
      sunday: "0",
    },
  ]);

  const [columnDefs] = useState<ColDef[]>([
    {
      headerName: "",
      field: "rowHeader",
      width: 45,
      pinned: "left",
      suppressMovable: true,
    },
    {
      headerName: "",
      field: "rowHeader2",
      maxWidth: 110,
      pinned: "left",
      suppressMovable: true,
    },
    {
      headerName: "Понедельник",
      field: "monday",
      suppressMovable: true,
      type: "editableColumn",
      minWidth: 220,
      cellStyle: (params) =>
        params.value === "1"
          ? { "background-color": "#FFD2D2", color: "#FFD2D2", }
          : { "background-color": "white", color: "white", opacity: "0" },
    },
    {
      headerName: "Вторник",
      field: "tuesday",
      minWidth: 220,
      suppressMovable: true,
      type: "editableColumn",
      cellStyle: (params) =>
        params.value === "1"
          ? { "background-color": "#FFD2D2", color: "#FFD2D2" }
          : { "background-color": "white", color: "white", opacity: "0" },
    },
    {
      headerName: "Среда",
      field: "wednesday",
      minWidth: 220,
      suppressMovable: true,
      type: "editableColumn",
      cellStyle: (params) =>
        params.value === "1"
          ? { "background-color": "#FFD2D2", color: "#FFD2D2" }
          : { "background-color": "white", color: "white", opacity: "0" },
    },
    {
      headerName: "Четверг",
      field: "thursday",
      minWidth: 220,
      suppressMovable: true,
      type: "editableColumn",
      cellStyle: (params) =>
        params.value === "1"
          ? { "background-color": "#FFD2D2", color: "#FFD2D2" }
          : { "background-color": "white", color: "white", opacity: "0" },
    },
    {
      headerName: "Пятница",
      field: "friday",
      minWidth: 220,
      suppressMovable: true,
      type: "editableColumn",
      cellStyle: (params) =>
        params.value === "1"
          ? { "background-color": "#FFD2D2", color: "#FFD2D2" }
          : { "background-color": "white", color: "white", opacity: "0" },
    },
    {
      headerName: "Суббота",
      field: "saturday",
      minWidth: 220,
      suppressMovable: true,
      type: "editableColumn",
      cellStyle: (params) =>
        params.value === "1"
          ? { "background-color": "#FFD2D2", color: "#FFD2D2" }
          : { "background-color": "white", color: "white", opacity: "0" },
    },
  ]);

  const getRowId = useMemo<GetRowIdFunc>(() => {
    return (params: GetRowIdParams) => {
      return params.data.id;
    };
  }, []);

  const setData = useCallback((e) => {
    const rowNode = gridRef.current!.api.getRowNode(e.data.id);
    const dayOfWeek = dataTable[e.column.instanceId-2]
    const lessonNum: string = e.data.id
    if (rowNode) {
      if (e.value === "0") {
        const newValue = "1";
        rowNode.setDataValue(e.colDef.field, newValue);
        dayOfWeek[lessonNum] = 'Не занимать'
        console.log(dataTable)
      }
      if (e.value === "1") {
        const newValue = "0";
        rowNode.setDataValue(e.colDef.field, newValue);
        dayOfWeek[lessonNum] = 'Занимать'
        console.log(dataTable)
      }
    }
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 450, width: "96%", margin: '10px auto 15px'}}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        getRowId={getRowId}
        onCellClicked={setData}
      ></AgGridReact>
    </div>
  );
};
