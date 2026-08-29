export default function Seccao({title, text, img}) {
    return(
        <div className="flex gap-5 grid-cols-2 p-10">
            <div className="flex flex-col">
                <h2 className="text-white font-bold ">{title}</h2>
                <p className="text-white w-100">{text}</p>
            </div>
            <div>
                <img src={img} alt={title} className="w-100"/>
            </div>
        </div>
    );
}