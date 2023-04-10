import React, { useRef, useEffect } from "react";
import * as Cesium from "cesium";
import { Viewer } from "@cesium/widgets";
import "@cesium/widgets/Source/widgets.css";

window.CESIUM_BASE_URL = '/static/Cesium/';

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1Mzc4OTM1MC00NjU2LTQ0NWMtOTYzZS1mYjk5NzQ5YzI5MjIiLCJpZCI6MTMyMzY1LCJpYXQiOjE2ODA3NTIzNDh9.7BCTH6jF7dSIDYzntgVhOQ0KY_3xWbhbYDaepCX2DyA';

function App() {
  const cesiumContainer = useRef(null);

  useEffect(() => {
    const viewer = new Viewer("cesiumContainer",cesiumContainer.current);    
    const entity = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-74.0721, 40.7128),
      point: {
        pixelSize: 10,
        color: Cesium.Color.RED,
      },
      label: {
        text: 'New York City',
        font: 'bold 16px sans-serif',
        showBackground: true,
        backgroundColor: new Cesium.Color(0.165, 0.165, 0.165, 0.8),
        backgroundPadding: new Cesium.Cartesian2(10, 7),
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        pixelOffset: new Cesium.Cartesian2(0, -30),
      },
    })
    viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(-74.0721, 40.7128),
      orientation : {
        heading : Cesium.Math.toRadians(0.0),
        pitch : Cesium.Math.toRadians(-15.0),
      },
      point: {
        pixelSize: 10,
        color: Cesium.Color.RED,
      },
    });
    viewer.zoomTo(entity);
    return () => {
      viewer.destroy();
    };

  },[])

  return <div ref={cesiumContainer} id="cesiumContainer" />;

}

export default App
