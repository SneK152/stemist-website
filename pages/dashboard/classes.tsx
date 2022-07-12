import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getClasses } from '@/components/auth/Classes'
import Container from '@/components/layout/Container';
import PartialBanner from '@/components/layout/PartialBanner';

export default function Classes() {
    
    interface ClassInformation {
        name: string;
        teacher: string;
        video: string[];
    }

    const router = useRouter()
    const [selectedVideo, setSelectedVideo] = useState<ClassInformation>()
    const [videoNumber, setVideoNumber] = useState<number>()

    useEffect(() => {
        const query = router.query
        const video = router.query.video
        const _class_ = router.query.class
        const classes = getClasses()
        const specClass = classes[Number(_class_!)]
        setSelectedVideo(specClass)
        setVideoNumber(Number(video!))
        localStorage.setItem('classInformation', JSON.stringify({
            query,
            video,
            classes,
            _class_
        }))
    }, [router.query])

    return (
        <Container
            title='Auth | Video'
        >
            <PartialBanner
                title={`${selectedVideo?.name} Day ${videoNumber! + 1} Video`}
            >
            </PartialBanner>
            <div className='p-5'>
                <h1 className='text-4xl font-bold text-center justify-center'>
                    Video
                </h1>
                <div className='space-y-4 p-3 text-lg'>
                    Class Name: <span className='font-semibold'>{selectedVideo?.name}</span>
                        <br />
                    Taught by: <span className='font-semibold'>{selectedVideo?.teacher}</span>
                </div>
                <video muted controls height={500} width={1500}>
                    <source src={selectedVideo?.video[videoNumber!]!} type="video/mp4"/>
                </video>
            </div>
        </Container>
    )  
}