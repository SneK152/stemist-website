function getClasses() {
    return classes
}

function createClass() {

}

const classes = [
    {
        zoom: 'https://www.google.om',
        name: 'Intro to Stem Workshop: Science',
        teacher: 'Steve Yang',
        video: [
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        ]
    },
    {
        zoom: 'https://www.nba.com',
        name: 'Intro to STEM Workshop: Tech',
        teacher: 'Snehil Kakani & Rohan Fernandes',
        video: [
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
        ]
    }
]

export { getClasses, createClass }