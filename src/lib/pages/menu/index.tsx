import { Flex, Box, Text, Button, Divider } from "@chakra-ui/react";
import { MenuItem } from "lib/components/auth/MenuItem";
import { RiAddCircleFill } from "react-icons/ri";

const Menu = () => {
  return (
    <Flex flexDirection="column">
      <Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="4xl">Menu</Text>
            </Box>
            <Box>
              <Button leftIcon={<RiAddCircleFill />}>New Item</Button>
            </Box>
          </Flex>
          <Divider />
        </Box>
        <Box marginY={5}>
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </Box>
      </Box>
    </Flex>
  );
};

export default Menu;
