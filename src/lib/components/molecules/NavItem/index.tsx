import type { FlexProps } from "@chakra-ui/react";
import { Flex, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  const itemColor = useColorModeValue("gray.800", "white");

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue("white", "gray.900"),
          boxShadow: "sm",
          rounded: "md",
          color: itemColor,
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: itemColor,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
