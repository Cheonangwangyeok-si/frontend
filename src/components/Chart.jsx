import { ResponsivePie } from "@nivo/pie";
import "../styles/Chart.scss";

const Chart = ({ data, isThisWeek }) => {
  // 각 데이터 항목에 label을 추가합니다.
  const formattedData = data.map((item) => ({
    ...item,
    label: `${item.id} ${item.value}%`,
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
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={360} // 모든 내부 레이블 숨기기
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              data: data,
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
