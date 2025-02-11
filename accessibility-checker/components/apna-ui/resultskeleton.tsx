import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export default function SkeletonDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className=" mb-4 h-4 w-[250px]" />
        <Skeleton className=" mb-4 h-4 w-[250px]" />
        <Skeleton className=" mb-4 h-4 w-[100px]" />
        <Skeleton className=" mb-4 h-4 w-[400px]" />
        <Skeleton className=" mb-4 h-4 w-[400px]" />
        <Skeleton className="h-4 w-[500px]" />
      </CardContent>
    </Card>

    /*<div className="flex items-center space-x-4 ">
      <Skeleton className="h-12 w-[100px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>*/
  )
}
