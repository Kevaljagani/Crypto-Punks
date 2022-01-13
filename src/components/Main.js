import React, { useState, useEffect } from 'react';

import './Main.css';
import twitterLogo from '../assets/owner/twitter.png';
import instagramLogo from '../assets/owner/instagram.png';
import moreIcon from '../assets/owner/more.png';
const Main = ({ selectedPunk, punkListData }) => {
	const [activePunk, setActivePunk] = useState(punkListData[0])

	useEffect(() => {

		setActivePunk(punkListData[selectedPunk]);
	}, [punkListData, selectedPunk]);

    const image = JSON.stringify(activePunk.image_original_url)
    const pimage = JSON.parse(image)

    const name = JSON.stringify(activePunk.name)
    const pname = JSON.parse(name)
    
    const itemno = JSON.stringify(activePunk.token_id)
    const pitemno = JSON.parse(itemno)

    const profilpic = JSON.stringify(activePunk.owner.profile_img_url)
    const pprofilepic = JSON.parse(profilpic)

    const address = JSON.stringify(activePunk.asset_contract.address)
    const paddress = JSON.parse(address)

	return (
		<div className="main">
			<div className="mainContent">
				<div className="punkHighLight">
					<div className="punkContainer">
						<img
							className="selectedPunk"
							src={pimage} />
					</div>
				</div>
				<div className="punkDetails" style={{ color: '#fff' }}>
					<div className="title">{pname}</div>
					<span className="itemNumber">#{pitemno}</span>

					<div className="owner">
						<div className="ownerImageContainer">
							<img src={pprofilepic} alt="" />
						</div>

						<div className="ownerDetails">
							<div className="ownerNameAndHandle">
								<div>{paddress}</div>

								<div className="ownerHandle">@Keval Jagani</div>
							</div>
                            <div className='temp' >
							<div className="ownerLink">
								<img src={instagramLogo} alt=" " />
							</div>
							<div className="ownerLink">
								<img src={twitterLogo} alt=" " />
							</div>
							<div className="ownerLink">
								<img src={moreIcon} alt=" " />
							</div>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;