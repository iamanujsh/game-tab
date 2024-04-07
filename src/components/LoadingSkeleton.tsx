import { Skeleton } from "@/components/ui/skeleton";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const LoadingSkeleton = () => {
  return (
    <>
      {count.map((index) => (
        <div
          key={index}
          className="flex flex-col h-[300px] w-[350px] gap-3 my-4"
        >
          <Skeleton className="h-[300px] w-[350px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100px]" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-[180px]" />
              <Skeleton className="h-6 w-[30px]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingSkeleton;

{
  /* <div className="flex flex-col space-y-3 h-[300px] w-[350px]">
<Skeleton className="h-[300px] w-[350px] rounded-xl" />
<div className="space-y-2">
  <Skeleton className="h-4 w-[100px]" />
  <div className="flex items-center justify-between">
    <Skeleton className="h-4 w-[180px]" />
    <Skeleton className="h-6 w-[30px]" />
  </div>
</div>
</div> */
}
