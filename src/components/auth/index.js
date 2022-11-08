import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LoginForm from "./login";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SignupForm from "./signUp";

export default function Auth() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label='lab API tabs example'
                variant='fullWidth'
              >
                <Tab label='Log in' value='1' />
                <Tab label='Sign up' value='2' />
              </TabList>
            </Box>
            <TabPanel
              value='1'
              sx={{
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <LoginForm />
            </TabPanel>
            <TabPanel
              value='2'
              sx={{
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <SignupForm />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
}
