import React from 'react';

interface SkeletonProps {
  className?: string;
  isDark?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', isDark = true }) => (
  <div className={`${isDark ? 'skeleton' : 'skeleton-light'} rounded-lg ${className}`} />
);

export const PlantCardSkeleton: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  const bg = isDark ? 'bg-sage-900/50' : 'bg-white';
  const border = isDark ? 'border-sage-700/30' : 'border-gray-200';
  return (
    <div className={`${bg} border ${border} rounded-2xl overflow-hidden`}>
      <Skeleton className="h-48 w-full rounded-none" isDark={isDark} />
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-2/3" isDark={isDark} />
        <Skeleton className="h-4 w-1/2" isDark={isDark} />
        <Skeleton className="h-4 w-full" isDark={isDark} />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-20 rounded-full" isDark={isDark} />
          <Skeleton className="h-6 w-16 rounded-full" isDark={isDark} />
        </div>
      </div>
    </div>
  );
};

export const DashboardStatSkeleton: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  const bg = isDark ? 'bg-sage-900/50' : 'bg-white';
  return (
    <div className={`${bg} rounded-2xl p-6 space-y-3`}>
      <Skeleton className="h-4 w-1/2" isDark={isDark} />
      <Skeleton className="h-10 w-2/3" isDark={isDark} />
      <Skeleton className="h-3 w-1/3" isDark={isDark} />
    </div>
  );
};
