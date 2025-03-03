import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { logger } from '../hooks/logerHook';

const LoggerCard = () => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        try {
            const data = await logger();
            console.log("Fetched Data (Once):", data);
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };
    
    useEffect(() => {
        fetchEvents();
    }, []);
    

    const columns = [
        {
            title: 'Task Name',
            dataIndex: 'TaskId',
            key: 'TaskName',
            render: (Task) => Task?.TaskName || "N/A",
        },
        {
            title: 'User ',
            dataIndex: 'UserId',
            key: 'name',
            render: (user) => user?.name || "Unknown", 
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
        },
        {
            title: 'Timestamp',
            dataIndex: 'doneAt',
            key: 'doneAt',
            render: (date) => new Date(date).toLocaleString(),
        },
    ];
    

    return (
        <div className="flex flex-col items-center p-8">
            <h2 className="text-2xl font-bold mb-6">Task Event Logs</h2>
            <Table
                className="shadow-lg border w-full"
                dataSource={events}
                columns={columns}
                rowKey="_id"
                pagination={false}
                scroll={{ y: 400 }}
            />
        </div>
    );
};

export default LoggerCard;
