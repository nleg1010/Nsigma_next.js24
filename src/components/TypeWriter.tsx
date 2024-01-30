import { useAnimation, useInView, motion, Variant } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type AnimatedTextProps = {
  text: { line: string | string[]; className?: string }[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  delay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const AnimatedText = ({
  text,
  el: Wrapper = "div",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const show = async () => {
      if (repeatDelay) {
        interval = setInterval(async () => {
          await controls.start("hidden");
          setIteration((prev) => prev + 1);
          await controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      controls.start("visible").then(show);
    } else {
      controls.start("hidden");
    }

    return () => clearInterval(interval);
  }, [controls, isInView, repeatDelay]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">
        {text.map(({ line }, lineIndex) => (
          <span key={lineIndex}>{line}</span>
        ))}
      </span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map(({ line, className }, lineIndex) =>
          Array.isArray(line) ? (
            <span
              className={twMerge("block", className)}
              key={`line-${lineIndex}`}
            >
              {line[iteration % line.length]
                .split(" ")
                .map((word, wordIndex) => (
                  <span
                    className="inline-block"
                    key={`${line}-${lineIndex}-${wordIndex}`}
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={`${line}-${lineIndex}-${wordIndex}-${charIndex}`}
                        className="inline-block"
                        variants={animation}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <span className="inline-block">&nbsp;</span>
                  </span>
                ))}
            </span>
          ) : (
            <span
              className={twMerge("block", className)}
              key={`line-${lineIndex}`}
            >
              {line.split(" ").map((word, wordIndex) => (
                <span
                  className="inline-block"
                  key={`${line}-${lineIndex}-${wordIndex}`}
                >
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${line}-${lineIndex}-${wordIndex}-${charIndex}`}
                      className="inline-block"
                      variants={animation}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </span>
          )
        )}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
