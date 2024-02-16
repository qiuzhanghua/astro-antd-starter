import React from "react";
import { Button, DatePicker, ConfigProvider, theme } from "antd";
import zhCN from 'antd/locale/zh_CN';

const AnButton: React.FC = () => (
  <ConfigProvider
    theme={{
      // 1.
      algorithm: theme.defaultAlgorithm,

      // 2. 组合使用暗色算法与紧凑算法
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
    locale={zhCN}
  >
    <Button className="bg-[#1677ff] text-white" type="primary" size="large" onClick={warn}>
      Button
    </Button>
    <DatePicker></DatePicker>
  </ConfigProvider>
);

function warn() {
  alert("Danger");
}

export default AnButton;
