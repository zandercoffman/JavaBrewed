import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

//const topicData = new Array(filters.length).fill(Math.random() * 10);
//const apData = new Array(10).fill(Math.random() * 10);

interface DrawerScoreTabProps {
    id: number;
    subtitle: string;
    title: string;
    setSelectedId: (id: number | null) => void; // Adjust the setSelectedId prop type to match
    data: any; // Adjust data type as needed
}

export function DrawerScoreTab({ subtitle, title, id, setSelectedId, data }: DrawerScoreTabProps) {
    const thisData = data.map((value: any, index: number) => ({
        name: months[index % months.length], // Use modulo to handle cases where there are more data points than months
        "Amount of Lessons done on this topic": value,
        pv: Math.random() * 10000, // You can replace this with actual data if available
        amt: Math.random() * 2500  // You can replace this with actual data if available
    }));

    return (
        <motion.div
            layoutId={id.toString()}
            onClick={() => setSelectedId(id)}
            className="cursor-pointer mb-4 text-center flex flex-col items-center"
            style={{ transformOrigin: "bottom right" }}
        >
            <div className="mb-4 cursor-pointer">
                <BarChart width={400} height={200} data={thisData} className="!cursor-pointer">
                    <Legend />
                    <Bar dataKey="Amount of Lessons done on this topic" fill="#000000" className="cursor-pointer"/>
                </BarChart>
            </div>
            <motion.h2 className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/80 border-[1px] border-black cursor-pointer">
                {title}
            </motion.h2>
        </motion.div>
    );
}
