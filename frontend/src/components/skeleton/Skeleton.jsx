import React from 'react';

const Skeleton = () => {
  return (
    <div className="w-full h-full">
      {/* Loop through 3 times */}
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className="flex flex-col gap-4 mb-4">
          <div className="flex items-center gap-4 w-full">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-gray-200 opacity-70"></div>
            <div className="flex flex-col gap-2 w-full">
              <div className="skeleton h-4 w-1/2 bg-gray-200 opacity-70"></div>
              <div className="skeleton h-4 w-3/4 bg-gray-200 opacity-70"></div>
            </div>
          </div>
          <div className="skeleton w-full h-32 bg-gray-200 opacity-70"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
