
import { useState, useEffect } from "react";

interface CounterProps {
  end: number;
  label: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ end, label, duration = 2000, prefix = "", suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-police-800 mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-police-800 mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to serving and protecting the citizens of Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter end={15000} label="Complaints Resolved" suffix="+" />
          <Counter end={95} label="Satisfaction Rate" suffix="%" />
          <Counter end={47} label="Counties Covered" />
          <Counter end={24} label="Hours of Service" suffix="/7" />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
