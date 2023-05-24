import { Flex } from "@chakra-ui/react";

import CTASection from "./components/CTASection";
import SomeImage from "./components/SomeImage";
import SomeText from "./components/SomeText";

const Home = () => {
  return (
    <Flex flexDirection="column">
      <SomeText />
      <SomeImage />
      <CTASection />
    </Flex>
  );
};

export default Home;
