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
        { id: 1, Categoryname: 'Collaboration', Catalogitem: 'Infrastructure Management', Description: 'Request for Disk Cleanup of AVD Pooled / Personal Desktops.'},
        { id: 2, Categoryname: 'Collaboration', Catalogitem: 'Session Logoff', Description: 'Reset VM Users with either login issue or facing unresponsive VM sessions'},
        { id: 3, Categoryname: 'Collaboration', Catalogitem: 'ProvisionMSTeams', Description: 'Request for creation of Private/ Public Teams for collaboration'},
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