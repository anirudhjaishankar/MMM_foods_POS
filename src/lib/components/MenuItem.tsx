import {
  Card,
  Image,
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { RiEdit2Fill, RiDeleteBin7Fill } from "react-icons/ri";

export const MenuItem = (props: any) =>
  //    {   orderQuantity,
  //   onAddToOrder,
  //   onRemoveFromOrder,
  //   menuItem,}
  {
    // console.log(name)
    return (
      <Card my={2}>
        <Flex justifyContent="flex-start">
          <Box m={2}>
            <Image
              src="../../public/assets/images/channa-masala.jpg"
              borderRadius="lg"
              height={100}
              width={100}
            />
          </Box>
          <Box m={2} height={100}>
            <Box>
              <Heading size="sm" m={1}>
                {props.name}
              </Heading>
              <Text fontSize="sm" m={1}>
                ₹ {props.price}
              </Text>
              <Flex justifyContent="flex-start" m={1}>
                <IconButton mx={2} aria-label="edit" icon={<RiEdit2Fill />} />
                <IconButton aria-label="delete" icon={<RiDeleteBin7Fill />} />
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Card>
    );
  };
