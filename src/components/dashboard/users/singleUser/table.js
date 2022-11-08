import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../auth/usersSlice";

export default function SingleUserTable({ user, setIsTable, isTable }) {
  const removeStatus = useSelector((state) => state.users.removeStatus);
  const dispatch = useDispatch();

  const onRemoveClick = () => {
    if (removeStatus === "idle") {
      dispatch(removeUser(user?.id));
    }
  };

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
      <Stack
        sx={{
          mt: 5,
          mb: 5,
          alignSelf: "center",
        }}
        spacing={2}
        direction='row'
      >
        <Button onClick={() => setIsTable(!isTable)} variant='contained'>
          Edit user
        </Button>
        <Button onClick={() => onRemoveClick()} variant='contained'>
          Remove user
        </Button>
      </Stack>
    </>
  );
}
