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
        { id: 1, Categoryname: 'Messaging', Catalogitem: 'sharedMailbox', Description: 'Raise a shared mailbox service request with the following detals - Mailbox name, mailbox alias, email id, users to be added, permissions for full access, send as, and Calendar Access. Ask for th details from the user', TaskNumber:'101'},
        { id: 2, Categoryname: 'Messaging', Catalogitem: 'setMailBoxQuota', Description: 'Configure Storage Quota for Exchange Online mailbox as per User requirements or Organizational Policies'},
        { id: 3, Categoryname: 'Messaging', Catalogitem: 'createDistributionList', Description: 'A Distribution Group, or A distribution List, is a collection of two or more people that appear on your Organizational address book'},
        { id: 4, Categoryname: 'Messaging', Catalogitem: 'manageMailboxPermission', Description: 'Grant/Revoke user permissions to a user to a designated mailbox'},
        { id: 5, Categoryname: 'Messaging', Catalogitem: 'MailboxDeletion', Description: 'Grant/Revoke user permissions to a user to Delete a mail'},
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