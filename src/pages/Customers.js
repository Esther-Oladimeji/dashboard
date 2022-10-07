import React from "react";
import MaterialTable, { MTableToolbar } from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import { forwardRef } from 'react';
import styled from "styled-components"
import {AddBox, Clear,DeleteOutline,ArrowDownward,Check,ChevronLeft  }from '@material-ui/icons';
import ChevronRight from '@material-ui/icons/ChevronRight';

import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Userdata from "../components/Userdata"
import MockData from "../MOCK_DATA.json"


export default function Customers() {
  const { useState } = React;
  const defaultMaterialTheme = createTheme();
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),

    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
  const [columns, setColumns] = useState([
    {
      title: 'No',
      field: 'id',

    },
    { title: 'Full Name', field: 'full_name' },
    { title: 'email', field: 'email', initialEditValue: 'initial edit value' },
    { title: 'Country', field: 'country', },
    {
      title: 'Plan',
      field: 'plan',
    },
    {
      title: 'Price',
      field: 'price',

    },
  ]);

  const [data, setData] = useState(MockData);
  return (
    <TableStyle>
    <Userdata />
    <div className= "customer-list">
    <ThemeProvider theme={defaultMaterialTheme}>
    <MaterialTable
    icons={tableIcons}
      title="Editable Preview" 
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    />
    </ThemeProvider>
    </div>
    </TableStyle>
  )
}

const TableStyle = styled.div`
margin: 5px 20px;
width: 85%;
.customer-list{
  margin-top: 20px;
}
`