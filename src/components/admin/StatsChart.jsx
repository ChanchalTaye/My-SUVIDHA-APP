import React from 'react';
import './StatsChart.css';

const StatsChart = ({ data, type = 'line', color = '#3b82f6', height = 150 }) => {
    // Helper to normalize data for SVG scaling
    const normalize = (val, max, min = 0) => {
        return ((val - min) / (max - min));
    };

    if (!data || data.length === 0) return null;

    const values = data.map(d => d.value || d.amount);
    const maxVal = Math.max(...values) * 1.2; // Add headroom
    // const minVal = 0;

    const width = 100; // ViewBox width percentage
    const stepX = width / (data.length - 1);

    const renderLineChart = () => {
        const points = data.map((d, i) => {
            const x = i * stepX;
            const y = 100 - (normalize(d.amount, maxVal) * 100);
            return `${x},${y}`;
        }).join(' ');

        // Create area fill path (close the loop at bottom)
        const areaPath = `${points} 100,100 0,100`;

        return (
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="chart-svg">
                <defs>
                    <linearGradient id={`grad-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={`M${areaPath}Z`} fill={`url(#grad-${type})`} className="chart-area" />
                <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" vectorEffect="non-scaling-stroke" className="chart-line" />

                {/* Data Points */}
                {data.map((d, i) => {
                    const x = i * stepX;
                    const y = 100 - (normalize(d.amount, maxVal) * 100);
                    return (
                        <g key={i} className="chart-point-group">
                            <circle cx={x} cy={y} r="3" fill={color} className="chart-point" />
                            <rect x={x - 10} y="0" width="20" height="100" fill="transparent" className="chart-hover-trigger">
                                <title>{d.day}: ₹{d.amount.toLocaleString()}</title>
                            </rect>
                        </g>
                    );
                })}
            </svg>
        );
    };

    const renderBarChart = () => {
        const barWidth = 60 / data.length; // Percentage width
        const gap = (100 - (barWidth * data.length)) / (data.length + 1);

        return (
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="chart-svg">
                {data.map((d, i) => {
                    const h = normalize(d.value, maxVal) * 100;
                    const x = gap + (i * (barWidth + gap));
                    const y = 100 - h;

                    return (
                        <g key={i} className="chart-bar-group">
                            <rect
                                x={x}
                                y={y}
                                width={barWidth}
                                height={h}
                                fill={color}
                                rx="1.5"
                                className="chart-bar"
                            >
                                <title>{d.name}: {d.value}</title>
                            </rect>
                        </g>
                    );
                })}
            </svg>
        );
    };

    return (
        <div className="stats-chart" style={{ height: `${height}px` }}>
            {type === 'line' ? renderLineChart() : renderBarChart()}

            {/* X-Axis Labels */}
            <div className="chart-labels">
                {data.map((d, i) => (
                    <span key={i} style={{ width: `${100 / data.length}%` }}>
                        {d.day || d.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default StatsChart;
