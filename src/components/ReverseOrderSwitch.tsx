import { HStack, Switch, Text } from "@chakra-ui/react";
interface Props {
  reverse: boolean;
  onToggle: (reverse: boolean) => void;
}
function ReverseOrderSwitch({ reverse, onToggle }: Props) {
  return (
    <HStack>
      <Switch
        isChecked={reverse}
        onChange={() => onToggle(!reverse)}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">
        <strong>Reverse Order</strong>
      </Text>
    </HStack>
  );
}
export default ReverseOrderSwitch;
