import { FC } from 'react';
import { Statistic } from 'antd';

const StatisticComponent: FC = () => {
  return (
    <Statistic title="Active Users" value={112893} />
  );
};

export default StatisticComponent;
