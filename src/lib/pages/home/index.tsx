import {
  Flex,
  Box,
  Text,
  Divider,
  Button,
  Card,
  Container,
} from "@chakra-ui/react";
import { RiAddCircleFill } from "react-icons/ri";

const Home = () => {
  return (
    <Flex flexDirection="column">
      <Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="5xl">Orders</Text>
            </Box>
            <Box>
              <Button leftIcon={<RiAddCircleFill />}>New Order</Button>
            </Box>
          </Flex>
          <Divider />
        </Box>
        <Box marginY={5}>
          <Container>
            <Card>Some content</Card>
          </Container>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
