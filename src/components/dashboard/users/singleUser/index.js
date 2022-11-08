import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchUserById, selectUser } from "../../../auth/usersSlice";
import Loader from "../../../loader";
import SingleUserTable from "./table";
import UserEditForm from "./form";

export default function SingleUser() {
  const params = useParams();
  const { userId } = params;
  const user = useSelector((state) => state.users.user);
  const userStatus = useSelector((state) => state.users.userStatus);
  const dispatch = useDispatch();
  const [isTable, setIsTable] = useState(true);

  const Swicher = () => {
    let value;
    switch (isTable) {
      case true:
        value = (
          <>
            <SingleUserTable
              user={user}
              isTable={isTable}
              setIsTable={setIsTable}
            />
          </>
        );
        break;
      case false:
        value = (
          <UserEditForm user={user} isTable={isTable} setIsTable={setIsTable} />
        );
        break;

      default:
        break;
    }
    return value;
  };

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUserById(userId));
    }
  }, [userStatus, dispatch, userId, fetchUserById]);

  if (userStatus === "loading") {
    return <Loader />;
  }
  return (
    <Container component='main' maxWidth='md' sx={{ mt: 5, mb: 5 }}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <img
            style={{
              width: 150,
              borderRadius: "50%",
              alignSelf: "center",
            }}
            src={`${user?.image}`}
            alt={user?.firstName}
            loading='lazy'
          />
          <Typography
            component='h1'
            variant='h4'
            sx={{ mt: 2, mb: 4 }}
            color='primary'
          >
            {user?.firstName + " " + user?.lastName}
          </Typography>
          <Swicher />

          <a href={`/users`}>Show all users</a>
        </Paper>
      </Grid>
    </Container>
  );
}
