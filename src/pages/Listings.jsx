import { Box, Heading, Text, Stack, Image } from "@chakra-ui/react";

const listings = [
  {
    id: 1,
    title: "Charming 1920s Bungalow",
    description: "Perfect for renovation, located in the heart of the city.",
    image: "/images/listing1.jpg"
  },
  {
    id: 2,
    title: "Old Farmhouse",
    description: "Needs work but has great potential for a modern eco-friendly home.",
    image: "/images/listing2.jpg"
  }
];

const Listings = () => (
  <Box p={4}>
    <Heading mb={4}>Available Properties</Heading>
    <Stack spacing={4}>
      {listings.map(listing => (
        <Box key={listing.id} p={4} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">{listing.title}</Heading>
          <Text mt={4}>{listing.description}</Text>
          <Image src={listing.image} alt={listing.title} mt={4} />
        </Box>
      ))}
    </Stack>
  </Box>
);

export default Listings;