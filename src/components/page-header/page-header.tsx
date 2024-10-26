
const PageHeader = ({title, className}: {title: string, className?: string | undefined}) => {
    return (
        <div className={`${className ? className : ""} container text-3xl font-bold p-8 border-solid border-b-gray-dark border-2 rounded-3xl`}>
            <h1>{title}</h1>
        </div>
    )
}

export default PageHeader