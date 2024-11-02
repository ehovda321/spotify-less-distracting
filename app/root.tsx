import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { HeartIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";
import type {
  LinksFunction,
  LoaderArgs,
  MetaFunction
} from "@remix-run/node";
import { json } from "@remix-run/node";
import CImage from "~/components/cimage";






import { atomWithStorage } from 'jotai/utils';



import HeartButton from "./components/HeartButton";
import { getUser, requireUser } from "./session.server";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import overlayscrollbars from 'overlayscrollbars/overlayscrollbars.css';


export const meta: MetaFunction = () => {
  return { title: "Muer" };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl },{ rel: "stylesheet", href: overlayscrollbars }];
};

export async function loader({ request }: LoaderArgs) {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
    COMMIT_REF: process.env.COMMIT_REF!
  }
  console.log('debug root loader')
  return json({
    user: await getUser(request),
    env
  });
};



