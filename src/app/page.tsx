import {Home as HomeIcon, ChevronLeft, Play, ChevronRight} from 'lucide-react'
import Image from 'next/image';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

export default function Home() {
  return (
   <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <Sidebar/>
      <main className="flex-1 p-6">
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-black/40 p-1"> 
            <ChevronLeft />
          </button>

          <button className="rounded-full bg-black/40 p-1"> 
            <ChevronRight/>
          </button>
        </div>
      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/capa.png" width={104} height={104} alt="Capa do Album" />
            <strong>Musica Boa</strong>
            <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play />
            </button>
          </a>
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/capa.png" width={104} height={104} alt="Capa do Album" />
            <strong>Musica Boa</strong>
            <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play />
            </button>
          </a>
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/capa.png" width={104} height={104} alt="Capa do Album" />
            <strong>Musica Boa</strong>
            <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play />
            </button>
          </a>
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/capa.png" width={104} height={104} alt="Capa do Album" />
            <strong>Musica Boa</strong>
            <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play />
            </button>
          </a>
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/capa.png" width={104} height={104} alt="Capa do Album" />
            <strong>Musica Boa</strong>
            <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play />
            </button>
          </a>
          <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/capa.png" width={104} height={104} alt="Capa do Album" />
            <strong>Musica Boa</strong>
            <button className="w-12 h-12 items-center justify-center pl-3 rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play />
            </button>
          </a> 
        </div> 

      
        <h2 className="font-semibold text-3xl mt-10">Made for Giovane Diniz</h2>

        <div className="grid grid-cols-8 gap-4 mt-4">
          <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/capa.png" className="w-full" width={104} height={104} alt="Capa do Album" />
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500 ">The girl on next door, Coldplay, Heiakim and more</span>
          </a>
          <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/capa.png" className="w-full" width={104} height={104} alt="Capa do Album" />
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500 ">The girl on next door, Coldplay, Heiakim and more</span>
          </a>
          <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/capa.png" className="w-full" width={104} height={104} alt="Capa do Album" />
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500 ">The girl on next door, Coldplay, Heiakim and more</span>
          </a>
          <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/capa.png" className="w-full" width={104} height={104} alt="Capa do Album" />
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500 ">The girl on next door, Coldplay, Heiakim and more</span>
          </a>
          <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/capa.png" className="w-full" width={104} height={104} alt="Capa do Album" />
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500 ">The girl on next door, Coldplay, Heiakim and more</span>
          </a>
        </div>
      </main>
    </div>
    <Footer/>
   </div>
  );
}
