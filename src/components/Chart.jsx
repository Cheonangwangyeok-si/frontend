import { ResponsivePie } from "@nivo/pie";
import "../styles/Chart.scss";

const Chart = ({ data, isThisWeek }) => {
  // 각 데이터 항목에 label을 추가합니다.
  const formattedData = data.map((item) => ({
    ...item,
    label: `${item.label} ${item.value}%`,
  }));

  return (
      <div className="chart">
        {isThisWeek ? (
          <div className="chart-title">THIS WEEK</div>
        ) : (
          <div className="chart-title">LAST WEEK</div>
        )}
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.6}
          activeOuterRadiusOffset={8}
          arcLinkLabelsSkipAngle={360} // 모든 링크 레이블 숨기기
          arcLabelsSkipAngle={360} // 모든 내부 레이블 숨기기
          colors={{ datum: "data.color" }}
          legends={[
            {
              data: formattedData,
              anchor: "right",
              direction: "column",
              justify: false,
              translateX: 56,
              translateY: 0,
              itemsSpacing: 20,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#2353B5",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 20,
              symbolShape: "circle",
              symbolBorderColor: "rgba(198, 198, 198, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
  );
};

export default Chart;
