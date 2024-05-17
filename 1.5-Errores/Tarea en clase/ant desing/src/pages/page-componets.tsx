import React from "react";
import PrimaryButton from "../componets/models/Search-component";
import IconComponent from "../componets/models/icon-component";
import RateComponent from "../componets/models/rate-component";
import NumberInputComponent from "../componets/models/numberInput-component";
import StatisticComponent from "../componets/models/statistic-component";
import ColorPickerComponent from "../componets/models/colorPicker-component";


const ComponentsPage: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "56px",
      }}
    >
      <div style={{ width: "100%" }}>
        <PrimaryButton />
      </div>

      <div style={{ width: "100%" }}>
        <IconComponent />
      </div>
      <div style={{ width: "100%" }}>
        <RateComponent />
      </div>
      <div style={{ width: "100%" }}>
        <NumberInputComponent />
      </div>
      <div style={{ width: "100%" }}>
        <StatisticComponent />
      </div>
      <div style={{ width: "100%" }}>
        <ColorPickerComponent/>
      </div>
    </div>
  );
};

export default ComponentsPage;
