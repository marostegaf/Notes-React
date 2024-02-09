export function NoteCard() {
    return (
        <button className="flex flex-col rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400">
            <span className="text-sm font-medium text-slate-300">
                Há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, facilis. Ex laboriosam in vero culpa et nostrum. Quisquam ipsum, aliquid facere eius tempore perferendis sequi adipisci in id provident! Voluptas?
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </button>
    )
}