import Image from "next/image";

export default function Home() {
  const srcDoc = `<!DOCTYPE html>
    <html style="height: 100%;">
      <head>
        <title>Burberry Web Page</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
        <style>
          body, html {
            height: 100%;
            margin: 0;
            padding: 0;
            font-size: 16px;
          }
          #full-height-section {
            min-height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
          }
          .product-card {
            width: 100%;
            max-width: 800px;
            height: 100%;
            max-height: 600px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          .product-content {
            flex: 1;
            overflow-y: auto;
          }
        </style>
      </head>
      <body class="bg-gray-200">
        <header class="w-full p-4 bg-white flex justify-center items-center shadow-md">
          <Image src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZudmC4uo7JnXvJeSsIwXqODG2IfP37ODdY6oodJ3EnQUBqSnlt1C_PJRJfDKYkE_7zhbSqn2h1TtMrVCLnaDEdOqrO-g=w1920-h863" alt="Burberry Logo" width={50} height={50} />
        </header>
        <section id="full-height-section">
          <div class="product-card bg-white rounded-lg shadow-lg m-3">
            <div class="w-full h-60 md:flex">
              <div id="productImage" class="w-full md:w-1/2 bg-cover bg-center"></div>
              <div class="w-full md:w-1/2 p-4">
                <h1 class="text-gray-900 font-bold text-2xl md:text-3xl mb-1">Short Check Collar Gabardine Trench Coat</h1>
                <p class="text-gray-700 text-base">Product Details:</p>
                <table class="table-auto w-full">
                  <thead>
                    <tr>
                      <th class="px-4 py-2">Materials</th>
                      <th class="px-4 py-2">Country of Origin</th>
                      <th class="px-4 py-2">Date Sourced</th>
                    </tr>
                  </thead>
                  <tbody id="productDetails"></tbody>
                </table>
                <p class="text-gray-700 text-sm mt-2 mb-4">Materials listed are in order of sourcing date</p>
                <p class="text-gray-700 text-base">Blockchain Product ID:</p>
                <p id="blockchainID" class="text-gray-900 font-bold text-xl"></p>
              </div>
            </div>
          </div>
        </section>
        <script>
          document.getElementById('productImage').style.backgroundImage = 'url(https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ5_L5qKsk3baXcNBsNQntgsLZ0nJLreZLP2ZcQKlqXBKoAa3AJSr27SybF92jE0kRZuo35v-h1TkIm9QSR1O2pUAi60g=w1920-h863)';
          const productInfo = [
            { materials: 'Cotton', country: 'USA', dateSourced: '01/01/2021' },
            { materials: 'Wool', country: 'Australia', dateSourced: '02/02/2021' },
            { materials: 'Polyester', country: 'China', dateSourced: '03/03/2021' }
          ];
          const detailsTable = document.getElementById('productDetails');

          productInfo.forEach(info => {
            const row = detailsTable.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            const cell3 = row.insertCell();

            cell1.textContent = info.materials;
            cell2.textContent = info.country;
            cell3.textContent = info.dateSourced;
          });
          document.getElementById('blockchainID').textContent = '1s4f5F5x';
        </script>
      </body>
    </html>`;

  return <iframe style={{ width: "100%", height: "100vh", border: "none" }} srcDoc={srcDoc} />;
}
