require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "630750de135f4a7fbd2acfc257ae0e2f"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
