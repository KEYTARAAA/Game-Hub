import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  let color =
    score >= 75
      ? "green"
      : score >= 50
      ? "yellow"
      : score >= 25
      ? "orange"
      : "red";
  return (
    <Badge fontSize="14px" padding={1} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
}
export default CriticScore;
