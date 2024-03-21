import Image from "next/image";

export default function Home() {
  const headerPart = (
    <header className="w-full p-4 bg-white flex justify-center items-center shadow-md">
      <Image className="h-10" src="https://source.unsplash.com/random/?burberry" alt="Burberry Logo" width={100} height={100} />
    </header>
  );

  const bodyPart = (
    <body className="bg-gray-200">
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
                <tbody id="productDetails"></tbody>
              </table>
              <p className="text-gray-700 text-sm mt-2">Materials listed are in order of sourcing date</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-700 text-base">Blockchain Product ID:</p>
            <p id="blockchainID" className="text-gray-900 font-bold text-xl"></p>
          </div>
        </div>
      </section>
      <script>
        {`
          document.getElementById('productImage').style.backgroundImage = 'url(https://source.unsplash.com/random)';
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
          document.getElementById('blockchainID').textContent = '00000x';
        `}
      </script>
    </body>
  );

  return (
    <>
      {headerPart}
      {bodyPart}
    </>
  );
}
