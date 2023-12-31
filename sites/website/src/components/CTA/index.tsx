import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section
        id="call-to-action"
        className="overflow-hidden px-0 py-0 md:px-0 lg:py-25 xl:py-30 2xl:px-0"
      >
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-0 py-0 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-0 xl:px-0 xl:py-0">
          <div className="flex flex-wrap gap-8 lg:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left w-full"
            >
              <Image
                src="/images/features/makise-call-to-action.svg"
                alt="予約しよう"
                width="720"
                height="512"
                className="object-cover w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  )
}

export default CTA
