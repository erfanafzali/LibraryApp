import Layout from "./Layout/Layout";
import Books from "./components/Books";

function App() {
  return (
    <div className="w-full mx-auto px-4 md:max-w-[1000px] mt-7">
      <Layout>
        <Books />
      </Layout>
    </div>
  );
}

export default App;
