import { Box, Flex, Button, Heading } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="space-between"
      gridGap={2}
    >
      <Box>
        <Heading size="sm">POS</Heading>
      </Box>
      <Box>
        <Button variant="ghost">Orders</Button>
        <Button variant="ghost">Menu</Button>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
