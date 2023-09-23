import TimeLine from "./TimeLine";

const TimeLineSection = () => {
  return (
    <section id="timeline" className="bg-[#150E28] py-24 sm:px-12 px-8">
      <div className="text-center">
        <h1 className="primary-heading">Timeline</h1>
        <p className="leading-[172.4%] md:w-[346px] mx-auto">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div className="mt-20">
        <TimeLine />
      </div>
    </section>
  );
};
export default TimeLineSection;
