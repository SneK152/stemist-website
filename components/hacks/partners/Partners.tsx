import useAos from '@/components/useAos';
import Card from '@/components/pages/Card';
import Link from 'next/link';

export default function Partners() {
  return (
    <div className="p-4 m-auto text-center justify-center">
      <div {...useAos()} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Link href="https://discord.gg/FxABpUX">
          <a
            className="col-span-2 h-60 bg-white bg-opacity-[.15] rounded-lg p-3 hover:-translate-y-2 transition-[transform] duration-300 shadow-lg"
            target="_blank"
            rel="noreferrer"
          >
            <Card className="flex items-center justify-center flex-col h-full shadow-none" title="Bay Area Hackathons" image='/partners/logo-BAHackathons-text.png'>
              Discord Community for finding and organizing hackathons across the Bay Area.
            </Card>
          </a>
        </Link>
        <Link href="https://www.noticebard.com/">
          <a
            className="col-span-2 h-60 bg-white bg-opacity-[.15] rounded-lg p-3 hover:-translate-y-2 transition-[transform] duration-300 shadow-lg"
            target="_blank"
            rel="noreferrer"
          >
            <Card className="flex items-center justify-center flex-col h-full shadow-none" title="NoticeBard" image='/partners/noticebard-logo.svg'>
              Notice-board for educational opportunities and events.
            </Card>
          </a>
        </Link>
      </div>
    </div>
  );
}
