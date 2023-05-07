import React from 'react'

const NewsAndMedia = () => {
    const newsandMediaInfo = [
        {
            id: 1,
            videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRenixlaboratoriesltd1%2Fvideos%2F6133048600107424%2F&show_text=false&width=560&t=0"

        },
        {
            id: 2,
            videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRenixlaboratoriesltd1%2Fvideos%2F764811198573565%2F&show_text=false&width=560&t=0"

        },
        {
            id: 3,
            videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRenixlaboratoriesltd1%2Fvideos%2F984146926296452%2F&show_text=false&width=560&t=0"

        },
        // {
        //     id: 4,
        //     videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRenixlaboratoriesltd1%2Fvideos%2F211425601500261%2F&show_text=false&width=560&t=0"

        // },

    ]

    return (
        <div className=' w-full lg:w-[90%] mx-auto py-10 text-center'>
            {/* <h3 className='bg-thirdLightPrimary w-36 mx-auto font '>F e a t u r e</h3> */}
            <h1 className='text-secondary font-semibold text-3xl mt-3'>News And Media</h1>
            <div className=' flex  flex-wrap  items-center pt-14'>


                {
                    newsandMediaInfo.map((info) => (
                        <div className="w-full md:w-6/12 lg:w-4/12" key={info.id}>

                            <div className=" m-2">


                                <iframe src={info.videoUrl} width="350" height="300" className='border-none overflow-hidden ' scrolling="no" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                            </div>
                        </div>


                    ))
                }
            </div>
        </div >
    )
}

export default NewsAndMedia