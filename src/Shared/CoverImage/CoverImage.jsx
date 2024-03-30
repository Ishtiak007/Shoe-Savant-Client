

const CoverImage = ({ img, title, description }) => {
    return (
        <div className="hero lg:h-[400px]" style={{
            backgroundImage: `url(${img})`, backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
        }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 lg:text-5xl font-bold">{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CoverImage;