import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Pie,
    PieChart, Cell
} from 'recharts';
import {useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {Col, message, Row, Typography} from 'antd';
import {useEffect, useMemo} from 'react';
import {useAuthUser} from "../../../@crema/utility/AuthHooks";

const {Title} = Typography;


const DealersChart = () => {
    const {user} = useAuthUser()
    const {data, isError, isLoading, refetch} = useQuery(
        'order-get',
        () => apiService.getData('Apartment/Statistic'),
        {
            enabled: false,
            onError: (error) => {

                message.error(error);
            },
        },
    );

    const {data:dataHomeStatus, isError:errorHomeStatus, isLoading:loadingHomeStatus, refetch:refetchHomeStatus} = useQuery(
        'get-by-status',
        () => apiService.getData('Apartment/FullStatistic'),
        {
            enabled: false,
            onError: (error) => {

                message.error(error);
            },
        },
    );

    useEffect(() => {
        refetch()
        refetchHomeStatus()
    }, []);


    const dataOrder = useMemo(() => {
        if (isLoading || isError) {
            return [];
        }


        data?.map((item) => {

            item.dateTime = new Date(item.dateTime).toLocaleDateString();
        })
        console.log(data)
        return data
    }, [data, isLoading, isError]);


    const dataHomeStatusChart = useMemo(() => {
        if (loadingHomeStatus || errorHomeStatus) {
            return [];
        }

        const data=[
            {
                name:'Куплено',
                value:dataHomeStatus?.buyed
            },
            {
                name:'Пустой',
                value:dataHomeStatus?.empty
            },
            {
                name:'Занят',
                value:dataHomeStatus?.busied
            }
        ]


        return data
    }, [dataHomeStatus, loadingHomeStatus, errorHomeStatus]);
    const COLORS = ['#e70505', '#00C49F', '#FFBB28'];


    return (
        <div>

            <Row>
                <Col span={16}>
                    <Title type='h2'>Статистика</Title>
                    {
                        user.role[1] ?
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={dataOrder}>
                                    <CartesianGrid strokeDasharray="3 6"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="count" fill="#8884d8"/>
                                </BarChart>
                            </ResponsiveContainer>
                            :
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={dataOrder}>
                                    <CartesianGrid strokeDasharray="3 6"/>
                                    <XAxis dataKey="dateTime"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="count" fill="#8884d8"/>
                                </BarChart>
                            </ResponsiveContainer>
                    }
                </Col>
                <Col span={8}>
                    {/*<Title type='h2'>Статистика статус дома</Title>*/}
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={'100%'} height={'100%'}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={true}
                                data={dataHomeStatusChart}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {dataHomeStatusChart.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Col>
            </Row>


        </div>
    )
}

export default DealersChart