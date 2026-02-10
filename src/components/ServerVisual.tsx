import { motion } from "framer-motion";

const nodes = [
  { x: 50, y: 15, label: "REQ" },
  { x: 50, y: 35, label: "AUTH" },
  { x: 25, y: 55, label: "DB" },
  { x: 75, y: 55, label: "API" },
  { x: 50, y: 75, label: "PROC" },
  { x: 50, y: 95, label: "RES" },
];

const connections = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [4, 5],
];

const ServerVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center">
    <div className="absolute inset-0 rounded bg-gradient-to-br from-primary/3 to-accent/3" />

    <svg viewBox="0 0 100 110" className="relative z-10 h-full w-full max-h-[450px]">
      {/* Connection lines */}
      {connections.map(([from, to], i) => (
        <motion.line
          key={i}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="hsl(120 100% 40% / 0.25)"
          strokeWidth="0.3"
          strokeDasharray="2 1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
        />
      ))}

      {/* Data pulses */}
      {connections.map(([from, to], i) => (
        <motion.circle
          key={`pulse-${i}`}
          r="0.6"
          fill="hsl(120 100% 50%)"
          initial={{ opacity: 0 }}
          animate={{
            cx: [nodes[from].x, nodes[to].x],
            cy: [nodes[from].y, nodes[to].y],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 1.5 + i * 0.3,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g
          key={node.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
        >
          <rect
            x={node.x - 7}
            y={node.y - 5}
            width="14"
            height="10"
            rx="1"
            fill="hsl(120 5% 5%)"
            stroke="hsl(120 100% 40% / 0.4)"
            strokeWidth="0.4"
          />
          <motion.rect
            x={node.x - 7}
            y={node.y - 5}
            width="14"
            height="10"
            rx="1"
            fill="transparent"
            stroke="hsl(120 100% 40% / 0.15)"
            strokeWidth="0.3"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          />
          <text
            x={node.x}
            y={node.y + 1.2}
            textAnchor="middle"
            fill="hsl(120 100% 50%)"
            fontSize="2.8"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="600"
          >
            {node.label}
          </text>
        </motion.g>
      ))}
    </svg>
  </div>
);

export default ServerVisual;
