import { Flex, Box, Text, Button, Divider } from "@chakra-ui/react";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";

import { getAllMenuItems } from "../../../services/menu";
import { MenuItem } from "lib/components/MenuItem";
import type MenuItemType from "lib/models/menu-item";

const Menu = () => {
  const [menuItems, setMenuItems] = useState<Array<MenuItemType>>([]);
  useEffect(() => {
    getAllMenuItems().then((allMenuItems: Array<MenuItemType>) => {
      setMenuItems(allMenuItems);
    });
  }, []);
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
          {menuItems.map(
            (m: MenuItemType): ReactElement<any, any> => (
              <MenuItem name={m.name} price={m.price} />
            )
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default Menu;
