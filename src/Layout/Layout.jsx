 

function Layout({ children }) {
  return (
    <>
      <header className="bg-slate-900 w-full h-24 rounded-lg flex justify-between items-center px-5 mb-4    shadow-md shadow-slate-500">
        <h1 className="md:text-2xl text-lg font-bold text-slate-400">
          Library App
        </h1>
        <p className="text-white text-base md:text-lg font-semibold">
          Erfan test project
        </p>
      </header>
      {children}
      <footer className=" mb-4 w-full mx-auto md:max-w-[1000px] ">
        <div className="w-full md:h-24 h-14 rounded-xl shadow-md shadow-slate-500 bg-slate-900 flex justify-center items-center text-lg md:text-xl font-bold text-slate-500">
          Developed by Erfan Afzali 😎
        </div>
      </footer>
    </>
  );
}

export default Layout;
