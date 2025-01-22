import { ChartNoAxesColumnIncreasing } from 'lucide-react';

const SortTh = ({ onClick, name }: { onClick?: () => void; name: string }) => {
    return (
        <th
            className={`py-4 px-4 rounded-2xl font-medium text-sm text-accent  text-nowrap ${
                onClick && 'hover:bg-gray-400/20 cursor-pointer hover:text-black'
            }`}
            onClick={onClick}
        >
            {name}
            {onClick && (
                <ChartNoAxesColumnIncreasing size={16} className={`inline-block ml-1 rotate-90`} />
            )}
        </th>
    );
};

export default SortTh;
