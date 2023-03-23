export const imageAnimation = {
	hidden: { scale: 0, opacity: 0.5, filter: "blur(10px)" },
	visable: { scale: 1, opacity: 1, filter: "blur(0px)", transition: { type: "tween", duration: 0.3 } },
};

export const titleAnimation = delay => {
	return {
		hidden: { y: -50, opacity: 0 },
		visable: {
			y: 0,
			opacity: 1,
			transition: { delay: delay * 0.2, type: "spring", duration: 1.25 },
		},
	};
};

export const textAnimation = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
			opacity: 0,
		},
		visable: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: { delay: delay * 0.2, type: type, duration: duration, ease: "easeOut" },
		},
	};
};
