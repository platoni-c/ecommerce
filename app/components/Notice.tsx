import GlareHover from "@/components/GlareHover";

const Notice = () => {

    return (
        <div className="sticky top-0 z-50 w-full uppercase">
            <GlareHover
                glareOpacity={0.4}
                glareSize={175}
                    >
                    <h2
                        style={{ fontSize: '1.6rem', fontWeight: '700', color: '#fff', margin: 0 }}
                    >
                This is a makeshift website so no orders shall be fulfilled. Strictly learning purposes.
                </h2>
            </GlareHover>
        </div>
    )
}
export default Notice
