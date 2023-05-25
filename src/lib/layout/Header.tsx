import { Box, Flex, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Flex
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
        <Button
          variant="ghost"
          onClick={() => {
            navigate("/");
          }}
        >
          Orders
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            navigate("/menu");
          }}
        >
          Menu
        </Button>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
