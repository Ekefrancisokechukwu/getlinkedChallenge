const SingleTimeline = ({ infohead, paragraph, time, index }) => {
  return (
    <>
      {/* desktop view */}
      <div className="container group  grid grid-cols-[1fr,4rem,1fr] gap-x-14 max_tab:hidden">
        <article
          className="content group-odd:order-1 group-even:order-3 group-odd:text-right
        group-even:text-left self-end "
        >
          <h3 className="text-pink text-[24px] capitalize">{infohead}</h3>
          <p>{paragraph}</p>
        </article>{" "}
        <div className="flex flex-col order-2 items-center gap-y-2  ">
          <div className="h-[137px]   bg-pink w-[4px] relative  "></div>
          <div
            className="w-[53px] h-[53px] text-[24px] timeline-dot
          grid place-items-center rounded-full"
          >
            {index + 1}{" "}
          </div>
        </div>
        <article className="relative group-even:order-1 group-odd:order-3 group-even:text-right group-odd:text-left   self-end">
          <h3 className="text-pink text-[24px] pt-[4rem]">{time}</h3>
        </article>
      </div>

      {/* mobile view */}

      <div className=""></div>
      <div className="container  hidden items-center gap-3 max_tab:flex">
        <div className="flex flex-col  items-center gap-y-2  ">
          <div className="h-[77px]   bg-pink w-[2px] relative  "></div>
          <div
            className="w-[19.32px] h-[19.32px] text-[12px] flex-shrink: 0 timeline-dot
          grid place-items-center rounded-full"
          >
            {index + 1}{" "}
          </div>
        </div>
        <div className="">
          <article
            className=" 
         "
          >
            <h3 className="text-pink text-[12px] font-bold capitalize">
              {infohead}
            </h3>
            <p className="text-[12px]">{paragraph}</p>
          </article>{" "}
          <article className="relative ">
            <h3 className="text-pink text-[12px] font-bold pt-1">{time}</h3>
          </article>
        </div>
      </div>
    </>
  );
};
export default SingleTimeline;
