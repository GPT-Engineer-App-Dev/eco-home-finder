import { Box, Input, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Search for:", searchTerm);
    // Implement search functionality here
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Search for Renovation Properties</Heading>
      <Input
        placeholder="Enter location, features, etc"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={2}
      />
      <Button onClick={handleSearch} colorScheme="blue">Search</Button>
    </Box>
  );
};

export default Search;