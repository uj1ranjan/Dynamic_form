import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import row from './Endpoint.json';
import img from "./icons8-edit-64-2.png"


const JsonTable = () => {

  const columns = [
    { field: 'id', headerName: <div style={{textDecoration:'underline'}}><b>ID</b></div>, width: 30 },
    
    {
      field: 'Name',
      headerName: <div style={{textDecoration:'underline'}}><b>Name</b></div>,
      description: 'This column is a category item name',
      width: 250,
      editable: true,
      sortable: true
    },
    {
        field: 'Description',
        headerName: <div style={{textDecoration:'underline'}}><b>Short Description</b></div>,
        description: 'This column is a Catalog Item name Description',
        width: 400,
        editable: true,
        sortable: true
    },
    {
        field: "actions",
        headerName: <div style={{textDecoration:'underline'}}><b>Actions</b></div>,
        width: 80,
        renderCell: (params) => {
            return <div className="action">
                <Link to={`${params.row.FormName}`}>
                    <img src = {img} alt="Edit"/>
                </Link>
            </div>
        }
    },
    {
      field: 'Category',
      headerName: <div style={{textDecoration:'underline'}}><b>Category</b></div>,
      description: 'This column is a category item name',
      width: 250,
      editable: true,
      sortable: true
    }
  ];
      

  return (
    <div className='jsonTable'>
        <DataGrid
        className="dataGrid"
        rows={row}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps: {debounceMs: 500},
            },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default JsonTable