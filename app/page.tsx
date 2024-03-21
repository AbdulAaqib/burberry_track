import Image from "next/image";

export default function Home() {
  const headerPart = (
    <header className="w-full p-4 bg-white flex justify-center items-center shadow-md">
      <Image className="h-10" src="https://source.unsplash.com/random/?burberry" alt="Burberry Logo" width={100} height={100} />
    </header>
  );

  const productDetailsPart = (
    <section className="flex items-center justify-center" id="full-height-section">
      <div className="product-card bg-white rounded-lg overflow-hidden shadow-lg m-3">
        <div className="flex overflow-hidden">
          <div id="productImage" className="w-1/2 bg-cover"></div>
          <div className="w-1/2 p-4">
            <h1 className="text-gray-900 font-bold text-3xl mb-1">Product Name</h1>
            <p className="text-gray-700 text-base">Product Details:</p>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Materials</th>
                  <th className="px-4 py-2">Country of Origin</th>
                  <th className="px-4 py-2">Date Sourced</th>
                </tr>
              </thead>
              <tbody id="productDetails">
                <tr>
                  <td className="px-4 py-2">Cotton</td>
                  <td className="px-4 py-2">USA</td>
                  <td className="px-4 py-2">01/01/2021</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Wool</td>
                  <td className="px-4 py-2">Australia</td>
                  <td className="px-4 py-2">02/02/2021</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Polyester</td>
                  <td className="px-4 py-2">China</td>
                  <td className="px-4 py-2">03/03/2021</td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-700 text-sm mt-2">Materials listed are in order of sourcing date</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-700 text-base">Blockchain Product ID:</p>
          <p id="blockchainID" className="text-gray-900 font-bold text-xl">00000x</p>
        </div>
      </div>
    </section>
  );

  const srcDoc = `<!DOCTYPE html>
    <html style="height: 100%; overflow-y: auto;">
        <head>
            <title>Burberry Web Page</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
            <style>
                body, html {
                    height: 100vh;
                    margin: 0;
                    overflow-y: auto;
                }
                #root {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }
                .product-card {
                    width: 80%;
                    max-width: 800px;
                    height: 80%;
                    max-height: 600px;
                    display: flex;
                    flex-direction: column;
                }
                .product-content {
                    flex: 1;
                    overflow-y: auto;
                }
            </style>
        </head>
        <body class="bg-gray-200" style="height: 100%; overflow-y: auto;">
            ${headerPart}
            ${productDetailsPart}
            <script>
                document.getElementById('productImage').style.backgroundImage = 'url(https://source.unsplash.com/random)';
            </script>
        </body>
    </html>`;

  return <iframe style={{ width: "100%", height: "100%", border: "none" }} srcDoc={srcDoc} />;
}
