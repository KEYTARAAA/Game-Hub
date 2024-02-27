import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import ReverseOrderSwitch from "./ReverseOrderSwitch";
import { useRef, useState } from "react";

interface Props {
  onSelectSortOrder: (order: string) => void;
  selectedSortOrder: string;
}
interface SortOrders {
  value: string;
  label: string;
}
function SortSelector({ onSelectSortOrder, selectedSortOrder }: Props) {
  const sortOrders = useRef<SortOrders[]>([
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ]);

  const reverseOrder = () => {
    sortOrders.current.map((sortOrder) => {
      sortOrder.value = reverseOrderString(sortOrder.value);
    });
  };

  const reverseOrderString = (order: string) => {
    return order.charAt(0) === "-" ? order.slice(1) : "-" + order;
  };
  const [reverse, setReverse] = useState(false);
  return (
    <HStack>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By:{" "}
          {sortOrders.current.find((order) => order.value === selectedSortOrder)
            ?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.current.map((order) => (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => {
                onSelectSortOrder(order.value);
              }}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <ReverseOrderSwitch
        reverse={reverse}
        onToggle={(reverse) => {
          setReverse(reverse);
          reverseOrder();
          onSelectSortOrder(reverseOrderString(selectedSortOrder));
        }}
      />
    </HStack>
  );
}
export default SortSelector;
