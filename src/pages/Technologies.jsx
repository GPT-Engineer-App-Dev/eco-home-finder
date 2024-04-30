import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react";

const Technologies = () => (
  <Box p={4}>
    <Heading mb={4}>Integration of New Technologies</Heading>
    <List spacing={3}>
      <ListItem>
        <Heading fontSize="lg">Solar Panels</Heading>
        <Text>Learn how to integrate solar panels to reduce energy costs.</Text>
      </ListItem>
      <ListItem>
        <Heading fontSize="lg">Heat Pumps</Heading>
        <Text>Modern heat pumps for efficient heating and cooling.</Text>
      </ListItem>
      <ListItem>
        <Heading fontSize="lg">Eco-friendly Insulation</Heading>
        <Text>Use sustainable materials for better insulation.</Text>
      </ListItem>
    </List>
  </Box>
);

export default Technologies;