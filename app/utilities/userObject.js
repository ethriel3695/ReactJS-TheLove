var React = require('react');
import Alex01 from './Alex01.jpg'
import Alex02 from './Alex02.jpg'

export const userObject = {
    users: [
        {
        user1: {
                name: 'Alex',
                description: [
                    {
                        reasonToLove1: ' has a contagious smile!',
                        reasonToLove2: ' gives great hugs!',
                        reasonToLove3: ' has so much love to give!'
                    }
                ],
                images: [
                    {
                        image1: Alex01,
                        image2: Alex02,
                        image3: Alex01,
                        image4: Alex02,
                        image5: Alex01,
                        image6: Alex02
                    }
                ]
            },
        user2: {
                name: 'Ben',
                description: [
                    {
                        reasonToLove1: ' will always choose to assist others!',
                        reasonToLove2: ' knows everything about everything!',
                        reasonToLove3: ' always cries during emotional movies!'
                    }
                ],
                images: [
                    {
                        image1: Alex02,
                        image2: Alex02,
                        image3: Alex02,
                        image4: Alex01,
                        image5: Alex01,
                        image6: Alex01
                    }
                ]
            }
        }
    ]
}