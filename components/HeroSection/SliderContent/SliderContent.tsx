// SliderContent.jsx
import { motion } from "framer-motion"
import Image from "next/image"
import {FC} from "react";

interface SliderContentProps {
	currentSlide: number
	slides: string[]
}

export const SliderContent: FC<SliderContentProps> = ({ currentSlide, slides }) => {
	return (
		<div className="w-full min-[375px]:min-h-[330px] min-[460px]:min-h-[380px] min-[460px]:w-[440px] lg:min-h-[435px] flex justify-center items-center">
			<motion.div
				key={currentSlide}
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0}}
				transition={{ duration: 0.5 }}
				className="w-full rounded-lg overflow-hidden"
			>
				<Image
					width={650}
					height={550}
					src={slides[currentSlide]}
					alt={`Slide ${currentSlide + 1}`}
					className="w-full h-full object-cover"
				/>
			</motion.div>
		</div>
	)
}