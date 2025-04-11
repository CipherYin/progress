'use client'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';



export const HomeLayout = () => {
    const pathname = usePathname()

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Introduction', href: '/introduction' },
        { name: 'Progress', href: '/progress' },
        { name: 'Methodology', href: '/methodology' },
        { name: 'Timetable', href: '/timetable' },

    ] 
 
  return (
    <nav className="flex justify-between pb-6 border-b-2 border-black">
         <div className="relative w-[12vw] h-[12vw] lg:w-[6.5vw] lg:h-[7vw] 2xl:w-[8vw] 2xl:h-[6vw] overflow-hidden rounded-xl">
                        <Image
                            src="/logo.jpg"
                            alt="icon"
                            fill
                            className="object-contain" 
                        />
        </div>
         <div className='flex flex-col text-[2.5vw] lg:text-[1.7vw]  2xl:text-3xl font-bold 2xl:-ml-20'>
            <div>
                HKU COMP7705
            </div>
            <div>
                CAPSTONE
            </div>
            <div>
                PROJECT
            </div>
             
        </div>
        <div className='flex gap-1 lg:gap-24 2xl:gap-24 justify-center items-center 2xl:pr-10'>
        {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                    <Link
                    key={item.name}
                    href={item.href}
                    className={cn(`relative  flex-shrink-0  font-medium  text-[2.5vw] lg:text-[1.4vw]  2xl:text-2xl hover:text-blue-500 transition-colors`,
                        isActive ? 'text-blue-500' : 'text-black')
                    }
                    >
                    <span>{item.name}</span>
                   
                    </Link>          
                )
            })}
        </div>
     
    </nav>
  );
};


