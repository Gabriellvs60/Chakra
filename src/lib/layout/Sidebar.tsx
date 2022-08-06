import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

import NavItem from "lib/components/molecules/NavItem";
import { LinkItems } from "lib/config/sidebar/links";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("gray.50", "gray.800")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="lg"
          fontFamily="monospace"
          fontWeight="bold"
          textTransform="uppercase"
        >
          TradeBook
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
