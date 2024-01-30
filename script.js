require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "d3743be335b6443e94b4126873fa1a88"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
