

const BrandCarouselCard = ({ brand }) => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.84), rgba(16, 7, 7, 0.35)), url(${brand?.logo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
            }}
            className="h-full relative"
        >
            <div className="absolute bottom-[8%] left-[38%] text-white font-clashBold text-2xl">
                {brand?.name}
            </div>
        </div>
    );
};

export default BrandCarouselCard;