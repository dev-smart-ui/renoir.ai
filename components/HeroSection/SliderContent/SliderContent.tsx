import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { FC } from "react"

interface SliderContentProps {
	slide: StaticImageData
}

export const SliderContent: FC<SliderContentProps> = ({ slide }) => {
	return (
		<div className="w-full max-w-[360px] md:max-w-[768px] lg:max-w-[650px] mx-auto aspect-[650/550] flex justify-center items-center">
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="w-full h-full rounded-lg overflow-hidden"
			>
				<Image
					width={650}
					height={550}
					src={slide}
					alt={`Slide`}
					className="w-full h-auto object-contain"
				/>
			</motion.div>
		</div>
	)
}