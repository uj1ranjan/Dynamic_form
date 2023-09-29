import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import img from "./icons8-edit-64-2.png"


const JsonTable = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        
        {
          field: 'Categoryname',
          headerName: 'Category name',
          description: 'This column is a category name',
          width: 150,
          editable: true,
        },
        {
          field: 'Catalogitem',
          headerName: 'Catalog item',
          description: 'This column is a Catalog Item name',
          width: 150,
          editable: true,
        },
        {
            field: 'Description',
            headerName: 'Description',
            description: 'This column is a Catalog Item name Description',
            width: 400,
            editable: true,
        },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return <div className="action">
                    <Link to={`${params.row.Catalogitem}`}>
                        <img src = {img} alt="Edit"/>
                    </Link>
                </div>
            }
        }
      ];
      
      const row = [
        { id: 1, Categoryname: 'Azure Virtual Desktop', Catalogitem: 'Request for AVD VDI', Description: 'Request for creation of a Pooled or Personal Azure VDI.'},
        { id: 2, Categoryname: 'Azure Virtual Desktop', Catalogitem: 'Request Access to Shared VDI', Description: 'Request for access/ permissions to designated Shared VDI.'},
        { id: 3, Categoryname: 'Azure Virtual Desktop', Catalogitem: 'Request Additional Resources', Description: 'Request for additional resources for VDI such as CPU /RAM etc.'},
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