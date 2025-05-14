
const Title = ({ title }: { title: string }) => {
    return (
        <p className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            {title}
        </p>
    )
}

export default Title