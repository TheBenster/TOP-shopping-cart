const LearnMore = () => {
  return (
    <section id="learn-more">
      <div className=" w-screen h-auto grid p-12 place-items-center grid-cols-2 grid-rows-2 ">
        <img src="https://placehold.co/600x300" alt="" />
        <img src="https://placehold.co/600x300" alt="" />
        <div id="learn-more-text" className="pt-12 col-span-2">
          <p className="text-4xl">
            When we started this shop back in the early 1200s, we wanted to make
            our customers know what quality means. We wanted to help not just
            those that can see colors, but those that can't.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
