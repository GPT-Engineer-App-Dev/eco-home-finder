import { Box, Flex, Link, Heading } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Search from "./Search";
import Listings from "./Listings";
import Technologies from "./Technologies";

const Index = () => {
  return (
    <Router>
      <Box p={4}>
        <Heading mb={4}>Renovation Finder</Heading>
        <Flex mb={4}>
          <Link as={NavLink} to="/search" p={2}>Search</Link>
          <Link as={NavLink} to="/listings" p={2}>Listings</Link>
          <Link as={NavLink} to="/technologies" p={2}>Technologies</Link>
        </Flex>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Index;