import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

// Custom Theme for Unique Styling
const customTheme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: 600,
          borderRadius: "8px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#1976D2",
            color: "#fff",
            transform: "scale(1.1)",
          },
        },
      },
    },
  },
});

const MuiPagination = ({ quantity, size, setSize, page, setPage }) => {
  const totalPages = Math.ceil(quantity / +size);

  return (
    <ThemeProvider theme={customTheme}>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        {/* Pagination */}
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={(event, value) => setPage(value - 1)}
          variant="outlined"
          shape="rounded"
          color="primary"
          size="large"
        />

        {/* Page Size Selection */}
        <Select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          sx={{
            ml: 2,
            height: "40px",
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "8px",
          }}
        >
          {[6, 8, 10, 12, 14].map((option) => (
            <MenuItem key={option} value={option}>
              {option} per page
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </ThemeProvider>
  );
};

export default MuiPagination;
