import type { FlexProps } from "@chakra-ui/react";
import {
  IconButton,
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FiMenu } from "react-icons/fi";

import ThemeToggle from "./ThemeToggle";

interface MobileProps extends FlexProps {
  onOpen?: () => void;
  icon: IconType;
}

const Header = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("gray.50", "gray.800")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems="center">
          <Box ml={1}>
            <ThemeToggle />
          </Box>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Header;
