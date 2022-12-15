import style from '../Statistics/statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <section className={style.statistics}>
    <h2 className={style.title}>{title}</h2>
    <ul className={style.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={style.item}
          style={{ backgroundColor: colorScale(stat.percentage) }}
        >
          <span className={style.label}>{stat.label}</span>
          <span className={style.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

const colorScale = percentage => {
  if (percentage <= 90 && percentage >= 31) return '#1db9c5';
  if (percentage <= 30 && percentage >= 21) return '#4dc5f9';
  if (percentage <= 20 && percentage >= 11) return '#e54d62';
  if (percentage <= 10 && percentage >= 0) return '#a43cf5';
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
