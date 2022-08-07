import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import NavItem from "lib/components/molecules/NavItem";
import { LinkItems } from "lib/config/sidebar/links";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { formatMessage } = useIntl();

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
          {formatMessage({ id: "label.projectName" })}
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {formatMessage({ id: link.name })}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
