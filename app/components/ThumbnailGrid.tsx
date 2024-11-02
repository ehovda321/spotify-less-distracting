import { useEffect, useState } from "react";

export default function ThumbnailGrid({ onThumbnailClick }: any) {
    return <div className="@container">
        <div className="grid grid-cols-1 @lg:grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4 gap-6">
        </div>
    </div>
}