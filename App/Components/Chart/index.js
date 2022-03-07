import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  LayoutAnimation
} from "react-native";
import update from "immutability-helper";

import { LineChart } from "react-native-charts-wrapper";
import colors from "../../Themes/Colors";
import color from "../../Constants/color";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { H } from "../../utils/DimensionCalculator";

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";

class LineChartScreen extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleSelect(event) {
    let entry = event.nativeEvent;
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null });
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) });
    }

    console.log(event.nativeEvent);
  }

  render() {
    return (

      <View style={{ flex: 1 }}>
        <View style={{ height: 80 }}>
          <Text> selected entry</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View>

        <View style={styles.container}>
          <LineChart
       
            style={styles.chart}
            data={{
              
              dataSets: [
                {
              
                values: [
                  {
                    y: 0,
                    x: 0,
                    marker: "65 kg"
                  },
                  {
                    y:15000,
                    x: 1,
                    marker: "77 kg"
                  },
                  {
                    y: 10000,
                    x: 2,
                    marker: "76 kg"
                  },
                  {
                    y: 25000,
                    x: 3,
                    marker: "74 kg"
                  },
                  {
                    y: 40000,
                    x: 4,
                    marker: "76 kg"
                  },
                  {
                    y: 35000,
                    x: 5,
                    marker: "Today: 65 kg"
                  },
                  {
                    y:60000,
                    x: 6,
                    marker: "65 kg"
                  },
                  {
                    y:50000,
                    x: 7,
                    marker: "77 kg"
                  },
                  {
                    y: 80000,
                    x: 8,
                    marker: "76 kg"
                  },
                  {
                    y: 70000,
                    x: 9,
                    marker: "74 kg"
                  },
                  {
                    y: 100000,
                    x: 10,
                    marker: "76 kg"
                  },
                  {
                    y: 110000,
                    x: 11,
                    marker: "Today: 65 kg"
                  }
                ],
                label: "",
                config: {
                  mode:"CUBIC_BEZIER",
                  drawValues: false,
                  lineWidth: 2,
                  drawCircles: true,
                  circleColor: processColor(color.PRIMARY),
                  drawCircleHole: false,
                  circleRadius: 5,
                  highlightColor: processColor("transparent"),
                  color: processColor(color.PRIMARY),
                  drawFilled: true,
                  fillGradient: {
                    colors: [ processColor("transparent"),processColor("transparent")],
                    positions: [0, 0.5],
                    angle: 90,
                    orientation: "TOP_BOTTOM"
                  },
                  fillAlpha: 1000,
                  valueTextSize: 15
                }
              },
{
                
                  values: [
                    {
                      y: 0,
                      x: 0,
                      marker: "65 kg"
                    },
                    {
                      y:25000,
                      x: 1,
                      marker: "77 kg"
                    },
                    {
                      y: 20000,
                      x: 2,
                      marker: "76 kg"
                    },
                    {
                      y: 35000,
                      x: 3,
                      marker: "74 kg"
                    },
                    {
                      y: 50000,
                      x: 4,
                      marker: "76 kg"
                    },
                    {
                      y: 45000,
                      x: 5,
                      marker: "Today: 65 kg"
                    },
                    {
                      y:60000,
                      x: 6,
                      marker: "65 kg"
                    },
                    {
                      y:60000,
                      x: 7,
                      marker: "77 kg"
                    },
                    {
                      y: 90000,
                      x: 8,
                      marker: "76 kg"
                    },
                    {
                      y: 80000,
                      x: 9,
                      marker: "74 kg"
                    },
                    {
                      y: 110000,
                      x: 10,
                      marker: "76 kg"
                    },
                    {
                      y: 120000,
                      x: 11,
                      marker: "Today: 65 kg"
                    }
                  ],
                  label: "",
                  
                  config: {
                    mode: "CUBIC_BEZIER",
                    drawValues: false,
                    lineWidth: 2,
                    drawCircles: true,
                    circleColor: processColor(color.YELLOW),
                    drawCircleHole: false,
                    circleRadius: 5,
                    highlightColor: processColor("transparent"),
                    color: processColor(color.YELLOW),
                    drawFilled: true,
                    fillGradient: {
                      colors: [ processColor("transparent"), processColor("transparent")],
                      positions: [0, 0.5],
                      angle: 90,
                      orientation: "TOP_BOTTOM"
                    },
                    fillAlpha: 1000,
                    valueTextSize: 15
                  }
                },

            
              ]
            }}
            chartDescription={{ text: "Orders" }}
            legend={{
              enabled: false
            }}
            marker={{
              enabled: true,
              markerColor: processColor("white"),
              textColor: processColor("black")
            }}
            xAxis={{
              enabled: true,
              granularity: 1,
              drawLabels: true,
              position: "BOTTOM",
             drawAxisLine: true,
              drawGridLines: false,
            
            
              fontFamily: "HelveticaNeue-Medium",
              fontWeight: "bold",
              textSize: 12,
              textColor: processColor("gray"),
              
              valueFormatter: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            }}
            
            //legend={{enabled:true}}
            
            yAxis={{
              left: {
                enabled: true,
                gridDashedLine: {lineLength :10, spaceLength: 10},
              // /  valueFormatter: [0, 10000, 20000, 30000, 40000, 50000,60000,70000,80000,90000,100000,110000]
              },
              right: {
                enabled: false
              },
        
             
            }}
            autoScaleMinMaxEnabled={true}
            animation={{
              durationX: 0,
              durationY: 1500,
              easingY: "EaseInOutQuart"
            }}
            drawGridBackground={false}
            drawBorders={false}
           touchEnabled={true}
            dragEnabled={true}
            scaleEnabled={true}
            scaleXEnabled={true}
            scaleYEnabled={true}
          //  pinchZoom={true}
            doubleTapToZoomEnabled={true}
            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}
            keepPositionOnRotation={false}
            onSelect={this.handleSelect.bind(this)}
            onChange={event => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems:"flex-end",
   //backgroundColor:"red",
   //textAlign:"justify",
  //  backgroundColor: "#F5FCFF",
    padding: 10
  },
  chart: {
    height: H(250)
  }
});

export default LineChartScreen;
