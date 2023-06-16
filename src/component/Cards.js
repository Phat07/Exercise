import React from 'react'

export default function Cards() {
    let img1 = 'https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(1).jpg'
    let img2 = 'https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(7).jpg'
    return (
        <div>
            <div className='card'>
                <img src={img1} alt='' />
                <div className='card-content'>
                    <h2 className='card-title'>FPT UNIVERSITY</h2>
                    <p className='card-description'>Saigon Hi-teck Park, Long Thanh My, Thu Duc City</p>
                </div>
            </div>
            <div className='card card_dark'>
                <img src={img2} alt='' />
                <div className='card-content'>
                    <h2 className='card-title'>CONTACT</h2>
                    <p className='card-description'>Saigon Hi-teck Park, Long Thanh My, Thu Duc City</p>
                </div>
            </div>
        </div>
    )
}
