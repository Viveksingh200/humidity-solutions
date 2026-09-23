"use client";

import { motion } from "framer-motion";

// Directional Reveal Component (Up, Down, Left, Right, Scale)
export function MotionReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  className = "",
  viewportMargin = "-60px",
  once = true,
  ...props
}) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: -distance }; // enters from left
      case "right":
        return { opacity: 0, x: distance }; // enters from right
      case "scale":
        return { opacity: 0, scale: 0.92 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "scale":
        return { opacity: 1, scale: 1 };
      default:
        return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container
export function MotionStaggerContainer({
  children,
  staggerDelay = 0.12,
  delayChildren = 0.05,
  className = "",
  viewportMargin = "-50px",
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger Child Item (Directional)
export function MotionStaggerItem({
  children,
  direction = "up",
  distance = 30,
  duration = 0.6,
  className = "",
  ...props
}) {
  const getVariants = () => {
    let hiddenState = { opacity: 0 };
    if (direction === "up") hiddenState.y = distance;
    if (direction === "down") hiddenState.y = -distance;
    if (direction === "left") hiddenState.x = -distance;
    if (direction === "right") hiddenState.x = distance;
    if (direction === "scale") hiddenState.scale = 0.94;

    return {
      hidden: hiddenState,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          ease: [0.21, 0.47, 0.32, 0.98],
        },
      },
    };
  };

  return (
    <motion.div variants={getVariants()} className={className} {...props}>
      {children}
    </motion.div>
  );
}

// Floating Ambient Motion
export function MotionFloat({
  children,
  yOffset = 10,
  duration = 4,
  className = "",
  ...props
}) {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Image Reveal with smooth zoom & slide
export function MotionImageReveal({
  children,
  direction = "left",
  delay = 0,
  duration = 0.85,
  className = "",
  ...props
}) {
  const initialOffset =
    direction === "left"
      ? { opacity: 0, x: -50, scale: 0.96 }
      : direction === "right"
      ? { opacity: 0, x: 50, scale: 0.96 }
      : direction === "down"
      ? { opacity: 0, y: -50, scale: 0.96 }
      : { opacity: 0, y: 50, scale: 0.96 };

  return (
    <motion.div
      initial={initialOffset}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
