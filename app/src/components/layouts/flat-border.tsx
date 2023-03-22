import ThemeToggle from "@components/theme-toggle"
import { motion } from "framer-motion"
import { ReactNode } from "react"

type FlatBorderProps = {
  header: ReactNode
  body: ReactNode
}

export default function FlatBorderLayout({ header, body }: FlatBorderProps) {
  return (
    <>
      <Wrapper>
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 10,
            duration: 0.15,
            delay: 0.25,
          }}
          className="relative"
        >
          <Container>
            <div className="mb-14">{header}</div>
            {body}
          </Container>
          <div className="flex justify-end md:absolute md:block md:-right-[12px] md:translate-x-1/2">
            <div className="md:rotate-90">
              <div className="md:-translate-x-1/2 md:mr-[24px]">
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    duration: 0.25,
                    delay: 1,
                  }}
                  className="z-0"
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </>
  )
}

// adds small amount of gutter on mobile, vertically/horizontally centers on desktop
function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="grid overflow-x-hidden md:h-full place-items-center">
      <div className="w-full p-4 md:mx-auto md:container">{children}</div>
    </div>
  )
}

// the border and padded container containing all the children of this layout
function Container({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 p-6 border-2 md:p-12 border-brand-border dark:border-brand-dark-border bg-brand-bg dark:bg-brand-dark-bg">
      {children}
    </div>
  )
}
