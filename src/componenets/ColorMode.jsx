import { useColorMode, Button, IconButton, Icon } from "@chakra-ui/react";
import { FaSun,FaMoon } from "react-icons/fa";

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (

    <IconButton
    variant="solid"
    aria-label="toggle theme"
    rounded="full"
    size="lg"
    // position="absolute"
    // bottom={4}
    // left={4}
    zIndex={100}
    pos={"fixed"}
    top={0}
    right={0}
    m={2}
    onClick={toggleColorMode}
    icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
    />
     
    
  );
}

export default ColorMode;
