import { MusicalNoteIcon, PlayIcon } from "@heroicons/react/20/solid";
import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useAtom } from "jotai";
import { z } from "zod";
import { zx } from "zodix";
import { playlistsAtom } from "~/atoms";
import PlayButton from "~/components/PlayButton";
import PlaylistIcon from "~/components/PlaylistIcon";
import ThumbnailGrid from "~/components/ThumbnailGrid";
import CImage from "~/components/cimage";
import { randomFetch } from "~/utils";
import Lottie from "lottie-react";
import spectrumAnimation from "../../public/spectrum.json";


export default function RadioPage() {
    const { onThumbnailClick } = useOutletContext<any>()
    const currentPosition = 0;
   
    return <div className="p-6 pt-16 @container/playlist">
            
        <p className="font-bold text-2xl text-white my-6">Radio</p>
        
        {
            <p className="text-white">...</p>
        }
    </div>
}