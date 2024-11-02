import { useEffect, useState } from "react"
import ReactPlayer from "react-player"

// Youtube embed fallback
export default function Player({
        playerRef, 
        urls = [], 
        playing, 
        onStart, 
        onBuffer, 
        onBufferEnd, 
        onReady, 
        onProgress, 
        onPause, 
        onEnded, 
        onDuration,
        volume = 1 
    }: any) {
    const [failedUrls, setFailedUrls] = useState<string[]>([])
    // console.log(urls)
    const url = urls.find((x: string) => !failedUrls.some(y => y == x))

    useEffect(() => {

    }, [failedUrls])

    if (!url) {
        return <></>
    }

    return <ReactPlayer
        playsInline
        ref={playerRef}
        onBuffer={onBuffer}
        onBufferEnd={onBufferEnd}
        onReady={onReady}
        onStart={onStart}
        onProgress={onProgress}
        onPause={onPause}
        onEnded={onEnded}
        playing={playing}
        onDuration={onDuration}
        onError={(error) => {
            console.log('debug player error', error)
            console.log('remove', url)
            setFailedUrls(furls => furls.concat(url));
        }}
        className="hidden"
        pip={false}
        url={url} 
        volume={volume}
        />
}