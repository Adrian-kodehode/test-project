export default function ChatCard() {
  return (
    <>
      <div className="p-6 mt-5 max-w-sm mx-auto bg-white rounded-xl flex items-center gap-x-4">
        <div className="shrink-0">
          <img className="size-12" src="/hello-4x.gif" alt="ChitChat Logo" />
        </div>
        <div>
          <h4 className="text-xl font-medium text-black">ChitChat</h4>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <br />
      <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="hello-4x.gif"
          alt="Miku's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Hatsune Miku</p>
            <p className="text-slate-500 font-medium"> Vocaloid</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <br />
    </>
  );
}
