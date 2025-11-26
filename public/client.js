const map = L.map("map").setView([-7.2575, 112.7521], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

let marker = null;

// ambil rute
fetch("/route.json")
  .then(r => r.json())
  .then(p => {
    const latlngs = p.map(pt => [pt[1], pt[0]]);
    L.polyline(latlngs, { color: "blue" }).addTo(map);
  });

// WebSocket
const ws = new WebSocket("ws://localhost:8080");

ws.onmessage = (msg) => {
  const { lat, lng } = JSON.parse(msg.data);

  if (!marker) {
    marker = L.marker([lat, lng]).addTo(map);
  } else {
    marker.setLatLng([lat, lng]); // smooth by CSS transition
  }

  // Auto pan (tidak ngeblink)
  map.panTo([lat, lng], { animate: true, duration: 1 });
};
