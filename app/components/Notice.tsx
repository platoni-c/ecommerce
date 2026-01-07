import GlareHover from "@/components/GlareHover";

const Notice = () => {

    return (
        <div className="sticky top-0 z-50 w-full bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-white/10">
            <GlareHover
                glareOpacity={0.4}
                glareSize={175}
            >
                <div className="mx-auto flex items-center justify-center px-4 py-2 text-center">
                    <h2 className="text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase text-gray-100">
                        This is a makeshift website — no orders will be fulfilled. Strictly for learning purposes.
                    </h2>
                </div>
            </GlareHover>
        </div>
    )
}
export default Notice
