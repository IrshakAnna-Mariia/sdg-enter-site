import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import SpaceX from 'icons/spacex.png';

const CQS = () => {
  const handleSubmit = () => {};

  return (
    <div className="mt-24 flex flex-col items-center gap-8">
      <SectionHeader title={'CQS'} />

      <div className="mx-auto flex w-3/4 flex-col items-center gap-8 rounded-3xl bg-white bg-opacity-50 p-16">
        <p className="text-3xl font-semibold">COMMENTS QUESTIONS SUGGESTIONS</p>

        <div className="flex w-full justify-between gap-8">
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col">
              <label className="text-lg">Topic</label>
              <input
                className="h-12 w-full rounded-3xl bg-gray-300 px-4 outline-none focus:shadow-xl"
                placeholder="Enter title..."
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Comment</label>
              <textarea
                className="w-full rounded-3xl bg-gray-300 px-4 outline-none focus:border-gray-300 focus:shadow-xl focus:ring-0 focus:ring-offset-0"
                placeholder="Enter comment..."
                rows={7}
                maxLength={300}
              />
            </div>
          </div>
          <img className="w-96 rounded rounded-3xl" alt="spaceX" src={SpaceX} />
        </div>

        {/* TODO: disable for unregister users */}
        <Button onClick={handleSubmit} label={'Submit'} styleForm={'pill'} size="base" className="px-14" />
      </div>
    </div>
  );
};

export default CQS;
