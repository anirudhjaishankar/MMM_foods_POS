import {
  Flex,
  Box,
  Text,
  Button,
  Container,
  Card,
  Divider,
} from "@chakra-ui/react";
import { RiAddCircleFill } from "react-icons/ri";

const Menu = () => {
  return (
    <Flex flexDirection="column">
      <Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="5xl">Menu</Text>
            </Box>
            <Box>
              <Button leftIcon={<RiAddCircleFill />}>New Item</Button>
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

export default Menu;
