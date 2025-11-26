const map = L.map("map").setView([-7.2575, 112.7521], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20
}).addTo(map);

let points = [];
let polyline = null;

// klik map → tambah titik
map.on("click", (e) => {
  const { lat, lng } = e.latlng;
  points.push([lng, lat]); // simpan lng,lat untuk konsisten
  if (polyline) map.removeLayer(polyline);
  polyline = L.polyline(points.map(p => [p[1], p[0]]), { color: "red" }).addTo(map);
});

// Save button
document.getElementById("saveBtn").onclick = () => {
  fetch("/save-route", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(points)
  }).then(() => alert("Route saved!"));
};
