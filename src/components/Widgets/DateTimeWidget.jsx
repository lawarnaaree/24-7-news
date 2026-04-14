/* ============================================
   DateTimeWidget — Live clock
   ============================================ */

import { useState, useEffect } from 'react';
import { getCurrentTime } from '../../utils/formatDate';
import './DateTimeWidget.css';

export default function DateTimeWidget() {
  const [clock, setClock] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => setClock(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-widget" id="datetime-widget">
      <div className="clock-widget__time">{clock.time}</div>
      <div className="clock-widget__date">{clock.date}</div>
    </div>
  );
}
