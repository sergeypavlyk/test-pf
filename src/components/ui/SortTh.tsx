import { SortConfig } from "@/types";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

const SortTh = ({
  onClick,
  name,
  sortConfig,
  sortKey,
}: {
  onClick?: () => void;
  name: string;
  sortConfig: SortConfig;
  sortKey: string;
}) => {
  return (
    <th
      className={`py-5 px-4 cursor-pointer rounded-2xl hover:text-black text-nowrap ${
        onClick && "hover:bg-gray-400/20"
      }`}
      onClick={onClick}
    >
      {name}
      {onClick && (
        <ChartNoAxesColumnIncreasing
          className={`inline-block ml-1 rotate-90`}
        />
      )}
    </th>
  );
};

export default SortTh;
