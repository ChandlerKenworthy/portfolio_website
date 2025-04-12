interface TimelineJobProps {
    number: number;
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export default function TimelineJob({ number, company, title, startDate, endDate, responsibilities }: TimelineJobProps) {
    return (
        <div className="relative flex flex-col items-center">
            <div className="relative z-10 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                <span className="text-xs font-semibold">{number}</span>
            </div>
            <div className="ml-4 text-center bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
                <h3 className="text-2xl font-bold text-blue-600">{title}</h3>
                <p className="text-gray-500">{company}</p>
                <p className="text-gray-400 text-sm">{startDate} - {endDate}</p>
                <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                    {responsibilities && responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}