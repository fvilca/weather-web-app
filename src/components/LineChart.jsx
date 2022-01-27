/* eslint-disable import/no-anonymous-default-export */
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useEffect, useRef } from "react";
import "../components/LineChart.scss";

export default ({ dataHoursDay, dataHoursNight }) => {
    useEffect(() => {
        let root = am5.Root.new("chartdiv");

        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",
                layout: root.verticalLayout,
                //maxTooltipDistance: 0
            })
        );

        /*let data = [
            {
                date: new Date(2021, 0, 1).getTime(),
                value: 1,
                //value2: 2.5
            },
            {
                date: new Date(2021, 0, 2).getTime(),
                value: 3,
                //value2: 2.1
            },
            {
                date: new Date(2021, 0, 3).getTime(),
                value: 2,
                value2: 3
            },
            {
                date: new Date(2021, 0, 4).getTime(),
                value: 1,
                value2: 2
            },
            {
                date: new Date(2021, 0, 5).getTime(),
                value: 1.5,
                value2: 0.5
            }
        ];*/
        let data = [];
        dataHoursDay.map(
            item => data.push({
                date: item.hour, value: item.temp, icon: item.icon, strokeSettings: item.strokeSettings
            })
        ) 
        dataHoursNight.map(
            item => data.push({
                date: item.hour, value: item.temp, icon: item.icon, strokeSettings: item.strokeSettings })
        )
        console.log(data);
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "none"
        }));
        cursor.lineX.set("visible", false);
        cursor.lineY.set("visible", false);

        let xRenderer = am5xy.AxisRendererX.new(root, {});
        xRenderer.grid.template.set("forceHidden", true);
        xRenderer.labels.template.setAll({ multiLocation: 0, location: 0 });
        let yRenderer = am5xy.AxisRendererY.new(root, {});
        yRenderer.grid.template.set("forceHidden", true);
        yRenderer.labels.template.setAll({ multiLocation: 0, location: 0 });

        // Create X-Axis
        let xAxis = chart.xAxes.push(
            /*am5xy.DateAxis.new(root, {
                baseInterval: { timeUnit: "day", count: 1 },
                renderer: xRenderer
            })*/
            am5xy.CategoryAxis.new(root, {
                categoryField: "date",
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(root, {})
            })
        );
        xAxis.data.setAll(data);

        // Create Y-axis
        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                maxPrecision: 0,
                renderer: yRenderer,
                //strokeOpacity: 1
            })
        );

        /*chart.set(
            "cursor",
            am5xy.XYCursor.new(root, {
                behavior: "zoomXY",
                xAxis: xAxis
            })
        );*/

        /*xAxis.set(
            "tooltip",
            am5.Tooltip.new(root, {
                themeTags: ["axis"]
            })
        );

        yAxis.set(
            "tooltip",
            am5.Tooltip.new(root, {
                themeTags: ["axis"]
            })
        );*/

        function createSeries(name, field) {
            let series = chart.series.push(
                am5xy.SmoothedXYLineSeries.new(root, {

                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: field,
                    categoryXField: "date",
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueY}",
                        dy: -5
                    }),
                    //stroke: am5.color("#939482")
                })
            );

            //series.strokes.template.set("strokeWidth", 5);

            series.strokes.template.setAll({
                strokeWidth: 4,
                templateField: "strokeSettings",
            });

            /*series.fills.template.setAll({
              visible: true,
              fillOpacity: 0.5,
              templateField: "fillSettings"
            });*/

            /*series
                .get("tooltip")
                .label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}");
            */

            //

            /*series.bullets.push(function () {
                let graphics = am5.Circle.new(root, {
                    strokeWidth: 5,
                    radius: 5,
                    //centerX:am5.p50,
                    //centerY:am5.p50,
                    stroke: series.get("stroke"),
                    fill: "white"
                    //fill: series.get("stroke")
                });

                return am5.Bullet.new(root, {
                    sprite: graphics
                });
            });*/
            series.data.setAll(data);
            series.appear(1000);
        }
        createSeries("Series #1", "value");

        chart.appear(1000, 100);
    }, []);
    return (
        <div className="chart--container">
            <div id="chartdiv" style={{ width: "1700px", height: "400px" }}></div>
        </div>
    );
};
