import Link from "next/link";

type CategoryCardProps = {
    title: string;
    image: string;
    link: string;
    onClick?: () => void;
};

const CategoryCard = ({ title, image, link, onClick }: CategoryCardProps) => {
    return (
        <Link href={`/shop/${link}`} onClick={onClick} className="block">
            <div className="relative group overflow-hidden w-full h-[400px] sm:h-[500px] lg:h-140 cursor-pointer">

                {/* Background image */}
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 ease-out group-hover:scale-105"
                ></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                {/* Text */}
                <p className="absolute bottom-0 left-0 w-full text-base uppercase font-bold text-center bg-[#433A3F] text-white py-4
                translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    {title}
                </p>
            </div>
        </Link>
    )
}

export default CategoryCard;
