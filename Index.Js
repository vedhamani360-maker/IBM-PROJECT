const dashboardData = {
  totalUsers: 1245,
  totalSales: 12340,
  activeProjects: 36,
  supportTickets: 7,
  monthlySales: [1200, 1900, 3000, 2500, 2700, 3200],
  weeklyUsers: [200, 400, 300, 500, 700, 600, 800]
};
function updateDashboard() {
  document.getElementById("usersCount").textContent = dashboardData.totalUsers;
  document.getElementById("salesCount").textContent = `$${dashboardData.totalSales}`;
  document.getElementById("projectsCount").textContent = dashboardData.activeProjects;
  document.getElementById("ticketsCount").textContent = dashboardData.supportTickets;
}
function createBarChart() {
  const ctx = document.getElementById("barChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Monthly Sales ($)",
          data: dashboardData.monthlySales,
          backgroundColor: "#38bdf8",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Monthly Sales Report",
          color: "#0f172a",
          font: { size: 16, weight: "bold" },
        },
      },
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

function createLineChart() {
  const ctx = document.getElementById("lineChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "User Activity",
          data: dashboardData.weeklyUsers,
          borderColor: "#0ea5e9",
          backgroundColor: "rgba(14,165,233,0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Weekly User Activity",
          color: "#0f172a",
          font: { size: 16, weight: "bold" },
        },
      },
      scales: {
        y: { beginAtZero: true },
      },
    },
  })
document.addEventListener("DOMContentLoaded", () => {
  updateDashboard();
  createBarChart();
  createLineChart();
});
