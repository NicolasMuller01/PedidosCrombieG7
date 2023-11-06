export default function () {
    return (
        <div className="container mx-auto max-w-screen-lg pl-10 pr-10 m-28">
                <h1 className="text-3xl font-semibold text-center">Reseña</h1>
                <h1 className="text-2xl pt-5">La City Sport</h1>

            <div className="flex-col items-center justify-center">
                <div className="pt-8 space-y-2">
                    <p>Nombre</p>
                    <input type="text" placeholder="Tu nombre" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="pt-8">
                    <div className="rating space-x-10">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>

                <div className="pt-8">
                    <div className="form-control space-y-2">
                        <p>Reseña</p>
                        <textarea className="textarea textarea-bordered h-24" placeholder="You review"></textarea>
                    </div>
                </div>
                
                
                <div className="flex items-center justify-end pt-10 space-x-4">
                    <button className="btn btn-active bg-red-500">Cancelar</button>
                    <button className="btn btn-active bg-green-400">Enviar</button>
                </div>
            </div>
        </div>
    );
}