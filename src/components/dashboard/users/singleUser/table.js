import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

export default function SingleUserTable({ user, setIsTable, isTable }) {
  return (
    <>
      <Table size='large'>
        <TableBody>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>{user?.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{user?.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone</TableCell>
            <TableCell>{user?.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Age</TableCell>
            <TableCell>{user?.age}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gender</TableCell>
            <TableCell>{user?.gender}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>University</TableCell>
            <TableCell>{user?.university}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Domain</TableCell>
            <TableCell>
              <a href={`https://${user?.domain}`} target='_blank'>
                {user?.domain}
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button
        onClick={() => setIsTable(!isTable)}
        variant='contained'
        sx={{ mb: 5 }}
      >
        Edit user
      </Button>
    </>
  );
}
