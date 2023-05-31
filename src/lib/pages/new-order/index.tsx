import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const NewOrder = () => {
  // set state for form controls
  //
  const { state } = useLocation();
  return <Flex flexDirection="column">New Order {state.lastOrderNumber}</Flex>;
};

export default NewOrder;
