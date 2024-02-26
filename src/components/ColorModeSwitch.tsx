import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>
        <strong>{colorMode === "dark" ? "Dark" : "Light"}</strong>
      </Text>
    </HStack>
  );
}
export default ColorModeSwitch;
