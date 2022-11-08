import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { fetchUsers } from "../../auth/usersSlice";
import { Link } from "react-router-dom";
import Loader from "../../loader";

export default function Users() {
  const users = useSelector((state) => state.users.users);
  const usersStatus = useSelector((state) => state.users.usersStatus);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch, fetchUsers]);

  if (usersStatus === "loading") {
    return <Loader />;
  }

  return (
    <Container component='main' maxWidth='lg' sx={{ mt: 5, mb: 5 }}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography component='h1' variant='h4' color='primary'>
            Users table
          </Typography>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>More details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.firstName + " " + user.lastName} </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Link color='primary' to={`${user.id}`} sx={{ mt: 3 }}>
                      View more
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            onClick={() => logout()}
            variant='contained'
            sx={{ mb: 5, mt: 5 }}
          >
            Logout
          </Button>
        </Paper>
      </Grid>
    </Container>
  );
}
