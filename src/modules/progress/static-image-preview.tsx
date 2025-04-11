'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Props{
    url: string
    className: string
}

export default function StaticImagePreview({url,className}:Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto",className)}>
      <Image
        fill
        src={url}
        alt="Progress"
        className="object-contain cursor-pointer transition hover:scale-[1.02]"
        onClick={() => setOpen(true)}
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: url }]}
      />
    </div>
  );
}
