'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Props{
    url: string
}

export default function StaticImagePreview({url}:Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <Image
        src={url}
        alt="Progress"
        className="rounded-md shadow-lg cursor-pointer transition hover:scale-[1.02]"
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
