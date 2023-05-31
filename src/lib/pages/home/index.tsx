import { Flex, Box, Text, Divider, Button, Card } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { getAllOrders } from "../../../services/order";
import type Order from "lib/models/order";

const Home = () => {
  const [newOrders, setNewOrders] = useState<Array<Order>>([]);
  const [olderOrders, setOlderOrders] = useState<Array<Order>>([]);

  const navigate = useNavigate();
  const lastOrderNumber = 1;
  function onNewOrder() {
    navigate("/new-order", { state: { lastOrderNumber } });
  }
  const fetchOrders = () => {
    getAllOrders().then((orders) => {
      setNewOrders(orders);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const ordersToday = orders.filter(
        (o: Order) => new Date(o.orderDate) > today
      );
      const oldOrders = orders.filter(
        (o: Order) => new Date(o.orderDate) < today
      );
      setNewOrders(ordersToday);
      setOlderOrders(oldOrders);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Flex flexDirection="column">
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize="4xl">Orders</Text>
          </Box>
          <Box>
            <Button onClick={() => onNewOrder()} leftIcon={<RiAddCircleFill />}>
              New Order
            </Button>
          </Box>
        </Flex>
        <Divider />
      </Box>
      <Box marginY={5}>
        <Card>{JSON.stringify(newOrders)}</Card>
        <Card>{JSON.stringify(olderOrders)}</Card>
      </Box>
    </Flex>
  );
};

export default Home;
