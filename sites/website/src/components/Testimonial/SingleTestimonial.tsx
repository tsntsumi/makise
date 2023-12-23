//import { Testimonial } from "@/types/testimonial";
import Image from "next/image"

const SingleTestimonial = ({ review }: { review: any }) => {
  const { name, stars, content, comment } = review
  return (
    <div className="rounded-lg bg-orange-400 text-white p-9 pt-4 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-4 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div className="flex gap-16 justify-between items-center">
          <h4 className="mb-0 text-metatitle3 text-white dark:text-white">
            {name}
          </h4>
          <p className="text-yellow-300">{stars}</p>
        </div>
      </div>

      <div className="mb-7.5 text-sm text-justify leading-normal space-y-1">
        {content}
      </div>
      <hr />
      <div className="mt-7.5 pl-6 border-l-8 border-orange-200 text-sm text-justify">
        {comment}
      </div>
    </div>
  )
}

export default SingleTestimonial
