import { Testimonial } from "@/types/testimonial";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
  </svg>
);

const getInitials = (fullName: string) => {
  const parts = fullName.trim().split(" ").filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (
    parts[0].charAt(0).toUpperCase() +
    parts[parts.length - 1].charAt(0).toUpperCase()
  );
};

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, content, designation } = testimonial;

  const ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-[#fbb040]">
        {starIcon}
      </span>,
    );
  }

  const initials = getInitials(name);

  return (
    <div className=" w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="marker: flex h-full flex-col rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]"
        data-wow-delay=".1s"
      >
        <div className="mb-[18px] flex items-center gap-[2px]">
          {ratingIcons}
        </div>

        <p className="mb-6 text-base text-body-color dark:text-dark-6">
          “{content}
        </p>

        <div className="mt-auto flex  items-center gap-4">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-300 text-sm font-semibold text-gray-700 dark:bg-gray-600 dark:text-white">
            {initials}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark dark:text-white">
              {name}
            </h3>
            <p className="text-body-secondary text-xs">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
