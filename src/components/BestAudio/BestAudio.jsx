import React from "react";

import "./bestAudio.styles.scss";

import BestAudioImg from "../../assets/images/shared/desktop/image-best-gear.jpg";
import BestAudioTab from "../../assets/images/shared/tablet/image-best-gear.jpg";
import BestAudioMob from "../../assets/images/shared/mobile/image-best-gear.jpg";

export default function BestAudio() {
	return (
		<div className="best-audio">
			<div className="best-audio-copy">
				<h2 className="best-audio-copy-heading">
					Bringing you the <span className="active-link">best</span> audio gear
				</h2>
				<p className="best-audio-copy-para">
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>

			<div className="best-audio-img">
				<picture>
					<source media="(max-width: 650px)" srcset={BestAudioMob}></source>
					<source media="(max-width: 1000px)" srcset={BestAudioTab}></source>
					<img src={BestAudioImg} alt="best-audio" />
				</picture>
			</div>
		</div>
	);
}
