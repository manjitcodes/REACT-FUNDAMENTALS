
interface DashboardCardsProps {
  totalPosts: number;
  totalComments: number;
  totalUsers: number;
}

function DashboardCards({
  totalPosts,
  totalComments,
  totalUsers,
}: DashboardCardsProps) {
  const cards = [
    {
      title: "Total Posts",
      value: totalPosts,
      icon: "📝",
    },
    {
      title: "Total Comments",
      value: totalComments,
      icon: "💬",
    },
    {
      title: "Total Users",
      value: totalUsers,
      icon: "👥",
    },
  ];

  return (
    <section className="stats-grid" aria-label="Dashboard statistics">
      {cards.map((card) => (
        <article className="stat-card" key={card.title}>
          <div className="stat-icon" aria-hidden="true">
            {card.icon}
          </div>

          <div>
            <p className="stat-title">{card.title}</p>
            <p className="stat-value">{card.value}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default DashboardCards;
